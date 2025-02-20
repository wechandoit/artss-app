from flask import Blueprint, jsonify, request
from models import db, Patient

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
    patient = Patient(**data)
    db.session.add(patient)
    db.session.commit()
    return jsonify(patient.to_dict()), 201

# edit a patient
@bp.route('/patients/<int:id>', methods=['PATCH'])
def edit_patient(id):
    patient = Patient.query.get_or_404(id)
    data = request.get_json()
    for key, value in data.items():
        setattr(patient, key, value)
    db.session.commit()
    return jsonify(patient.to_dict())

# delete a patient
@bp.route("/patients/<int:id>", methods=["DELETE"])
def delete_patient(id):
    patient = Patient.query.get_or_404(id)
    db.session.delete(patient)
    db.session.commit()
    return '', 204
