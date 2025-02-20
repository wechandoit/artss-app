import { SuctionType } from "@/data/types";
import { Pencil2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";

/* StatusProps
  status: the status of the the parent patient component
  onSave: pass the updated status to the parent patient component
 */
type StatusProps = {
  suction: SuctionType;
  onSave: (propName: string, newSuction: SuctionType) => void;
};

const SuctionStatus = ({ suction, onSave }: StatusProps) => {
  // editing state variable
  const [editing, setEditing] = useState(false);
  // input state variable
  const [inputValue, setInputValue] = useState(suction.date);

  // function to update the input property value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with input value
  };

  // Edit Button Click: set to editing state
  const handleEditClick = () => {
    setEditing(true);
  };
  // Save Button Click: update patient, make api PATCH request
  const handleApproveClick = () => {
    // todo: validate that date is a future time

    // change to iso
    const date = new Date(inputValue);
    const isoDate = date.toISOString();

    setEditing(false);
    const newSuction = {
      id: 0, // temporary id
      status: "Approved",
      date: isoDate,
    };
    onSave("status", newSuction);
  };

  return (
    <div className="flex-1 min-w-full border-2 px-6 py-4 rounded-md">
      <div className="flex justify-between">
        <label className="font-medium">Suction Status</label>
        {!editing ? (
          // Display edit button if not editing the value
          <button
            className="bg-gray-100 text-gray-500 btn-icon"
            onClick={handleEditClick}
          >
            <Pencil2Icon className="w-5 h-5" />
          </button>
        ) : (
          // Display approve button if editing the value
          <button
            className="bg-approve-green text-white text-sm btn-primary"
            onClick={handleApproveClick}
          >
            Approve
          </button>
        )}
      </div>
      <div className="flex text-xl gap-2 my-2 py-2">
        {suction.status} for
        <input
          id="status"
          className={`outline-none items-center text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="datetime-local"
          onChange={handleInputChange}
          value={inputValue}
          disabled={!editing}
        />
      </div>
    </div>
  );
};

export default SuctionStatus;
