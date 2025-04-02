from flask import Blueprint, jsonify, request
from models import db, Patient, Suction
from datetime import datetime

bp = Blueprint('main', __name__)

### API connection points ###

# default home
@bp.route("/", methods=['GET'])
def index():
    return jsonify({"message": "Welcome to Patients API :)"})

# fetch all patients 
@bp.route('/patients', methods=['GET'])
def get_patients():
    patients = Patient.query.all()
    return jsonify([p.to_dict() for p in patients]), 200

# fetch a patient by their id
@bp.route('/patients/<int:id>', methods=['GET'])
def get_suctions_for_patient(id):
    patient = Patient.query.get_or_404(id)
    return jsonify(patient.to_dict()), 200

# create a patient
@bp.route('/patients', methods=['POST'])
def create_patient():
    data = request.get_json()

    # Remove 'id' from the data if it exists because the database will generate the ID
    data.pop('id', None)

    # Extract suctions data and remove it from the main patient data
    suctions_data = data.pop('suctions', [])

    # Create the Patient object
    patient = Patient(**data)
    db.session.add(patient)
    db.session.flush()  # Flush to get the patient ID before adding suctions

    # Create Suction objects for each suction in suctions_data
    for suction_data in suctions_data:
        # Remove 'id' from the suction data if it exists
        suction_data.pop('id', None)

        # Parse the date string into a datetime object
        if 'date' in suction_data:
            suction_data['date'] = datetime.strptime(suction_data['date'], "%Y-%m-%dT%H:%M")
        suction = Suction(**suction_data, pid=patient.id)
        db.session.add(suction)

    # Commit the transaction
    db.session.commit()

    return jsonify(patient.to_dict()), 201

# edit a patient
@bp.route('/patients/<int:id>', methods=['PATCH'])
def edit_patient(id):
    data = request.get_json()
    patient = Patient.query.get_or_404(id)

    # Handle suctions separately
    suctions_data = data.pop('suctions', None)
    if suctions_data is not None:
        # Clear existing suctions
        patient.suctions.clear()

        # Add updated suctions
        for suction_data in suctions_data:
            # Parse the date string into a datetime object
            if 'date' in suction_data:
                suction_data['date'] = datetime.strptime(suction_data['date'], "%Y-%m-%dT%H:%M")

            suction = Suction(**suction_data)
            patient.suctions.append(suction)

    # Update other patient fields
    for key, value in data.items():
        setattr(patient, key, value)

    db.session.commit()
    return jsonify(patient.to_dict()), 200

# delete a patient
@bp.route("/patients/<int:id>", methods=["DELETE"])
def delete_patient(id):
    patient = Patient.query.get_or_404(id)
    db.session.delete(patient)
    db.session.commit()
    return '', 204
