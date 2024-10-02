import { Pencil2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

/* FreqProp
  freq: the freq of the the parent patient component
  onSave: pass the updated freq to the parent patient component
 */
type FreqProps = {
  freq: number;
  onSave: (propName: string, newFreq: number) => void;
};

const SuctionFreq = ({ freq, onSave }: FreqProps) => {
  // state variable to control editing of input property
  const [editing, setEditing] = useState(false);
  // state variable for the input property value
  const [inputValue, setInputValue] = useState(freq.toString());
  // function to update the input property value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with input value
  };
  // Edit Button Click: set to editing state
  const handleEditClick = () => {
    setEditing(true);
  };
  // Save Button Click: update patient, make api PATCH request
  const handleSaveClick = async () => {
    // TODO: validate changes (nonnegativity)
    setEditing(false);
    const newFreq = parseInt(inputValue);
    onSave("freq", newFreq);
  };

  return (
    <div className="flex-1 min-w-max border-2 px-6 py-4 rounded-md">
      <div className="flex justify-between">
        <label className="font-medium">Suction Frequency</label>
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
      <div className="flex text-xl gap-2 my-2 py-2">
        Every
        <input
          id="frequency"
          className={`outline-none w-16 text-center text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="number"
          onChange={handleInputChange}
          value={inputValue}
          disabled={!editing}
        />
        hour(s)
      </div>
    </div>
  );
};

export default SuctionFreq;
