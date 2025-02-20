import { useState } from "react";
import TubeTypeDropdown from "./tubetypedropdown";
import { Pencil2Icon } from "@radix-ui/react-icons";

/* TubeProps
  tubeType: the tube type of the the parent patient component
  onSave: pass the updated tube type to the parent patient component
 */
type TubeProps = {
  tubeType: string;
  onSave: (propName: string, newTubeType: string) => void;
};

const TubeType = ({ tubeType, onSave }: TubeProps) => {
  // state variable to control editing of input property
  const [editing, setEditing] = useState(false);
  // state variable for the input property value
  const [dropdownValue, setDropdownValue] = useState(tubeType.toString());
  // Edit Button Click: set to editing state
  const handleEditClick = () => {
    setEditing(true);
  };
  // Save Button Click: update patient, make api PATCH request
  const handleSaveClick = async () => {
    setEditing(false);
    const newType = dropdownValue;
    onSave("tubeType", newType);
  };

  return (
    <div className="flex-1 min-w-max border-2 px-6 py-4 rounded-md">
      <div className="flex justify-between">
        <label className="font-medium">Tracheal Tube Type</label>
        {!editing ? (
          // Display edit button if not editing value
          <button
            className="bg-gray-100 text-gray-500 btn-icon"
            onClick={handleEditClick}
          >
            <Pencil2Icon className="w-5 h-5" />
          </button>
        ) : (
          // Display save button if editing value
          <button
            className="bg-add-blue text-white text-sm btn-primary"
            onClick={handleSaveClick}
          >
            Save
          </button>
        )}
      </div>
      <div className="text-black">
        <TubeTypeDropdown
          editing={editing}
          className="my-2 py-2 w-48 text-xl"
          value={dropdownValue}
          setValue={setDropdownValue}
        />
      </div>
    </div>
  );
};

export default TubeType;
