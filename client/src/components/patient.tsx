import SuctionStatus from "./patientinfo/suctionstatus";
import SuctionDistance from "./patientinfo/suctiondist";
import TubeType from "./patientinfo/tubetype";
import SuctionFreq from "./patientinfo/suctionfreq";
import { PatientType } from "@/data/types";
import DeleteDialog from "./patientinfo/deletedialog";
import useModifyPatients from "@/hooks/useModifyPatients";
import { useState } from "react";

/* PatientProps
  initialPatient: the initial patient object to be rendered
  setPatients: set state for patients objects
 */
type PatientProps = {
  patient: PatientType;
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const Patient = ({ patient, setPatients }: PatientProps) => {
  const { tryUpdatePatient } = useModifyPatients(setPatients);

  // State to toggle between view and edit modes
  const [isEditing, setIsEditing] = useState(false);

  // Local state to hold temporary changes while editing
  const [tempPatient, setTempPatient] = useState<PatientType>(patient);

  const handleInputChange = (propName: string, newValue: any) => {
    setTempPatient((prev) => ({ ...prev, [propName]: newValue }));
  };

  const handleSaveClick = () => {
    tryUpdatePatient(patient.id, tempPatient); // Update the API with changes
    setIsEditing(false); // Exit edit mode
  };

  const handleCancelClick = () => {
    setTempPatient(patient); // Reset changes
    setIsEditing(false); // Exit edit mode
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div className="flex-col min-w-full space-y-8 bg-white p-4 rounded shadow">
      <div className="flex justify-between items-start">
        <div className="text-2xl">
          {/* Display patient info: name, room number */}
          {isEditing ? (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempPatient.fName}
                  onChange={(e) => handleInputChange("fName", e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={tempPatient.lName}
                  onChange={(e) => handleInputChange("lName", e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-2">
                <label className="font-semibold">Room No.</label>
                <input
                  type="text"
                  value={tempPatient.roomNo}
                  onChange={(e) => handleInputChange("roomNo", e.target.value)}
                  className="border border-gray-300 p-2 rounded w-full"
                  placeholder="Room Number"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="font-semibold">{`${patient.fName} ${patient.lName}`}</div>
              <div className="mt-2">
                <label className="mr-2 font-semibold">Room No.</label>
                <span>{patient.roomNo}</span>
              </div>
            </div>
          )}
        </div>
        {/* Edit, Save, and Cancel buttons */}
        {isEditing ? (
          <div className="flex gap-2">
            <button
              className="bg-blue-500 text-white btn-primary"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="bg-gray-200 text-gray-700 btn-primary"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="bg-gray-200 text-gray-700 btn-primary"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex flex-wrap min-w-full gap-2 justify-between">
        {/* Display patient suctioning info/parameters */}
        <SuctionStatus suction={patient.suctions[0]} onSave={handleInputChange} />
        <SuctionDistance dist={patient.dist} onSave={handleInputChange} />
        <TubeType tubeType={patient.tubeType} onSave={handleInputChange} />
        <SuctionFreq freq={patient.freq} onSave={handleInputChange} />
      </div>
      {/* delete dialog control for deleting this patient */}
      <div className="flex justify-end ">
        <DeleteDialog patient={patient} setPatients={setPatients} />
      </div>
    </div>
  );
};

export default Patient;