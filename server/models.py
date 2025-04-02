from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
import pytz

db = SQLAlchemy()

class Patient(db.Model):
    __tablename__ = "patients_table"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fName = db.Column(db.String(255), nullable=False)
    lName = db.Column(db.String(255), nullable=False)
    roomNo = db.Column(db.String(255), nullable=False)
    dist = db.Column(db.Integer, nullable=False)
    freq = db.Column(db.Integer, nullable=False)
    tubeType = db.Column(db.String(255), nullable=False)

    # relationship to suctions table, order by descending date
    suctions = db.relationship("Suction", 
                                back_populates="patient", 
                                cascade="all, delete-orphan",
                                order_by="Suction.date.desc()")

    def to_dict(self):
        return {"id": self.id, 
                "fName": self.fName, 
                "lName": self.lName,
                "roomNo": self.roomNo,
                "dist": self.dist,
                "freq": self.freq,
                "tubeType": self.tubeType,
                "suctions": [s.to_dict() for s in self.suctions]
        }
    
    def __repr__(self):
        return f"<Patient ID {self.id}: {self.fName} {self.lName}>"
    
class Suction(db.Model):
    __tablename__ = "suctions_table"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    passes = db.Column(db.Integer, nullable=True)
    pid = db.Column(db.Integer, db.ForeignKey("patients_table.id", ondelete="CASCADE"), nullable=False)

    # relationship to patients table
    patient = db.relationship("Patient", back_populates="suctions")

    # convert time zone datetime to EST time zone.
    def date_local(self):
        local_timezone = pytz.timezone('US/Eastern')
        local_date = self.date.astimezone(local_timezone)
        return local_date.strftime("%Y-%m-%dT%H:%M")

    def to_dict(self):
        return {"id": self.id, 
                "status": self.status, 
                "date": self.date_local(),
                "passes": self.passes if self.passes else None,
        }
    
    def __repr__(self):
        return f"<Suction ID {self.id} for Patient ID {self.pid}>"
    

