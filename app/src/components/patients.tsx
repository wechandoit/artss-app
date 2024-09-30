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
    <div className="p-16 space-y-20">
      {patients
        .sort((a, b) => (a.status.date > b.status.date ? -1 : 1))
        .map((patient) => (
          <div key={patient.id}>
            <Patient patient={patient} setPatients={setPatients} />
          </div>
        ))}
    </div>
  );
};

export default Patients;
