import { useEffect, useState } from "react";
import { PatientType } from "@/data/types";
import Patient from "@/components/patient";
import { fetchPatients } from "@/data/api";

const Patients = () => {
  const [patients, setPatients] = useState<PatientType[]>([]);

  useEffect(() => {
    fetchPatients().then((data) => setPatients(data));
  }, []);

  return (
    <div>
      {patients
        .sort((a, b) => (a.status.time > b.status.time ? -1 : 1))
        .map((patient) => (
          <Patient key={patient.id} patient={patient} />
          // <div key={patient.id} className="border-b p-4">
          //   {patient.fName}
          // </div>
        ))}
    </div>
  );
};

export default Patients;
