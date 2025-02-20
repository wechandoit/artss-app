import { PatientType, defaultPatient } from "@/data/types";
import { useState } from "react";
import { PlusIcon } from "@radix-ui/react-icons";
import TubeTypeDropdown from "./tubetypedropdown";
import useModifyPatients from "@/hooks/useModifyPatients";

type addDialogProps = {
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const AddDialog = ({ setPatients }: addDialogProps) => {
  // use custom hook to make api request
  const { tryAddPatient } = useModifyPatients(setPatients);
  // state variable controlling whether dialog to add patient info is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /* TODO: state variable for controlling error message */
  // const [errorMsg, setErrorMsg] = useState("");

  // state variables for new patient data, initialized as empty objects/values
  const [newPatientData, setNewPatientData] =
    useState<PatientType>(defaultPatient);
  const [statusDate, setStatusDate] = useState(newPatientData.suctions[0].date);
  const [tubeType, setTubeType] = useState(newPatientData.tubeType);
  // functions for controlling dialog apperance
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
    setNewPatientData(defaultPatient);
    setStatusDate("");
    setTubeType("");
  };
  // Input or Select Element Change: update patient state
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setNewPatientData({ ...newPatientData, [name]: value });
  };
  // Add Button Click: finalize patient data and send api request
  const handleSubmit = () => {
    // TODO: validate changes (future date, nonnegative values)
    newPatientData.tubeType = tubeType;
    newPatientData.suctions[0].date = statusDate.toString();
    // make api request
    tryAddPatient(newPatientData);
    // setPatients((prevPatients: PatientType[]) => [
    //   newPatientData,
    //   ...prevPatients,
    // ]);
    // await createPatient(newPatientData);
    closeDialog();
  };

  return (
    <div>
      {/* Add Patient Button that opens dialog */}
      <button
        className="bg-add-blue text-white space-x-2 btn-primary"
        onClick={openDialog}
      >
        <PlusIcon className="w-5 h-5" />
        <span>New Patient</span>
      </button>
      {/* Display dialog box if open */}
      {isDialogOpen && (
        <div className="dialog-bg">
          <div className="w-1/2 dialog-box">
            <div className="text-lg text-center font-semibold">
              Add a New Patient
            </div>
            {/* Input fields for a new patient */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex-col space-y-2">
                <p>Patient Info</p>
                <div className="flex-grow border-b border-gray-300"></div>
                <div className="space-y-2">
                  {/* First Name */}
                  <input
                    name="fName"
                    value={newPatientData.fName}
                    className="flex-1 w-full outline-none bg-gray-100 p-2"
                    type="text"
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                  {/* Last Name */}
                  <input
                    name="lName"
                    value={newPatientData.lName}
                    className="flex-1 w-full outline-none bg-gray-100 p-2"
                    type="text"
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                  {/* Room Number */}
                  <input
                    name="roomNo"
                    value={newPatientData.roomNo}
                    className="flex-1 w-full outline-none bg-gray-100 p-2"
                    type="text"
                    onChange={handleChange}
                    placeholder="Room Number"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p>Suction Info</p>
                {/* Tube Type */}
                <div className="flex-grow border-b border-gray-300"></div>
                <div className="flex-1 w-full space-x-2">
                  <label>Tube Type:</label>
                  <TubeTypeDropdown
                    editing={true}
                    className="p-2"
                    value={tubeType}
                    setValue={setTubeType}
                  />
                </div>
                {/* Distance */}
                <div className="flex-1 w-full space-x-2">
                  <label htmlFor="new distance">Suction Distance:</label>
                  <input
                    id="new distance"
                    name="dist"
                    value={newPatientData.dist}
                    className="outline-none bg-gray-100 w-16 p-2"
                    type="number"
                    onChange={handleChange}
                    placeholder="Room Number"
                    required
                  />
                  CM
                </div>
                {/* Frequency */}
                <div className="flex-1 w-full space-x-2">
                  <label htmlFor="new frequency">
                    Suction Frequency: Every
                  </label>
                  <input
                    id="new frequency"
                    name="freq"
                    value={newPatientData.freq}
                    className="outline-none bg-gray-100 w-16 p-2"
                    type="number"
                    onChange={handleChange}
                    placeholder="Room Number"
                    required
                  />
                  HRS
                </div>
                {/* Status Date */}
                <div className="flex-1 w-full space-x-2">
                  <label htmlFor="new status date">Schedule for:</label>
                  <input
                    id="new status date"
                    name="statusDate"
                    value={statusDate}
                    className="outline-none bg-gray-100 p-2"
                    type="datetime-local"
                    onChange={(e) => setStatusDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Buttons to cancel/save the added patient data */}
              <div className="flex justify-between mt-4 ">
                <button
                  className="bg-gray-300 text-black btn-primary"
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-add-blue text-white btn-primary"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDialog;
