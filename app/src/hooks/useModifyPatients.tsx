import { deletePatient, createPatient, editPatient } from "@/data/api";
import { PatientType } from "@/data/types";

/*  Custom Hook for modifying patients information
    Params:
      setPatients - React setState Function of PatientType[]
    Returns:
      {async function, async function, async function}
 */
const useModifyPatients = (
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>,
) => {
  // make API request to delete a patient given ID
  const tryDeletePatient = async (id: number) => {
    try {
      await deletePatient(id);
      setPatients((prevPatients: PatientType[]) =>
        prevPatients.filter((p: PatientType) => p.id !== id),
      );
    } catch (err) {
      const error = (err as Error).message ?? "Unable to delete patient :(";
      // TODO: display error as a toast/notification
      console.error(error);
    }
  };
  // make API request to add a patient given a PatientType
  const tryAddPatient = async (patient: PatientType) => {
    try {
      if (!patient) {
        throw new Error("Provided patient information is undefined");
      }
      const newPatient = await createPatient(patient);
      setPatients((prevPatients: PatientType[]) => [
        newPatient,
        ...prevPatients,
      ]);
    } catch (err) {
      const error = (err as Error).message ?? "Unable to add patient :(";
      // TODO: display error as a toast/notification
      console.error(error);
    }
  };
  // make API request to modify a patient given partial patient information
  const tryUpdatePatient = async (
    id: number,
    patientUpdates: Partial<PatientType>,
  ) => {
    try {
      if (!patientUpdates) {
        throw new Error("Provided patient updates is undefined");
      }
      const updatedPatient = await editPatient(id, patientUpdates);
      setPatients((prevPatients: PatientType[]) =>
        prevPatients.map((patient) =>
          patient.id === id ? { ...patient, ...updatedPatient } : patient,
        ),
      );
    } catch (err) {
      const error = (err as Error).message ?? "Unable to load patients :(";
      // TODO: display error as a toast/notification
      console.error(error);
    }
  };

  return { tryDeletePatient, tryAddPatient, tryUpdatePatient };
};

export default useModifyPatients;
