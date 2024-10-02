// import { useEffect, useState } from "react";
// import { PatientType } from "@/data/types";
// import { fetchPatients } from "@/data/api";
import Patient from "@/components/patient";
import PatientsActions from "./patientsactions";
import useFetchPatients from "@/hooks/useFetchPatients";

const Patients = () => {
  // patients state variable for the patients data
  // const [patients, setPatients] = useState<PatientType[]>([]);
  // fetch and update the patients displayed
  // useEffect(() => {
  //   fetchPatients().then((data) => setPatients(data));
  // }, []);

  // use custom hook to define patients and setPatients state
  const { patients, setPatients } = useFetchPatients();

  return (
    <div className="p-16 space-y-14">
      {/* Component to modify/view the patients as a whole */}
      <PatientsActions setPatients={setPatients} />
      {/* Display the patients */}
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
