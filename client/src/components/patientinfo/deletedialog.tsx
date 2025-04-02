import { PatientType } from "@/data/types";
import { useState } from "react";
import useModifyPatients from "@/hooks/useModifyPatients";

/* Patient Props
  patient: the patient associated with the deletedialog
  setPatients: set state of patients
*/
type PatientProps = {
  patient: PatientType;
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const DeleteDialog = ({ patient, setPatients }: PatientProps) => {
  // use custom hook to delete patient from database
  const { tryDeletePatient } = useModifyPatients(setPatients);

  // state variable for controlling whether dialog is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // functions for opening/closing dialog
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  // async function to delete the patient and update patients
  const handleDelete = async () => {
    tryDeletePatient(patient.id);
    // await deletePatient(patient.id);
    // setPatients((prevPatients: PatientType[]) =>
    //   prevPatients.filter((p: PatientType) => p.id !== patient.id),
    // );
  };

  return (
    <div>
      {/* Delete button */}
      <button
        className="bg-red-500 text-white btn-primary"
        onClick={openDialog}
      >
        Delete
      </button>
      {/* Dialog Display */}
      {isDialogOpen && (
        <div className="dialog-bg">
          <div className="dialog-box text-center ">
            <div className="text-lg font-semibold">
              Are you sure you want to delete this patient?
            </div>
            <div>This action cannot be undone.</div>
            {/* Buttons to confirm deletion */}
            <div className="flex justify-between mt-4 ">
              <button className="bg-gray-300 btn-primary" onClick={closeDialog}>
                Cancel
              </button>
              <button
                className="bg-red-500 text-white btn-primary"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteDialog;
