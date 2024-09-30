import { PatientType } from "@/data/types";
import { useState } from "react";
import { deletePatient } from "@/data/api";
import { TrashIcon } from "@radix-ui/react-icons";

type PatientProps = {
  patient: PatientType;
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const DeleteDialog = ({ patient, setPatients }: PatientProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleDelete = async () => {
    await deletePatient(patient.id);
    setPatients((prevPatients: PatientType[]) =>
      prevPatients.filter((p: PatientType) => p.id !== patient.id),
    );
  };

  return (
    <div>
      <button className="h-8 p-1 rounded-md border-2 ">
        <TrashIcon className="w-4 h-4 text-red-500" onClick={openDialog} />
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 gap-8 text-center rounded shadow-lg">
            <div className="text-lg font-semibold">
              Are you sure you want to delete this patient?
            </div>
            <div>This action cannot be undone.</div>
            <div className="flex justify-between mt-4 ">
              <button
                className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
                onClick={closeDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
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
