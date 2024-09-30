import { SuctionStatusType } from "@/data/types";
import React, { useState } from "react";

type StatusProp = {
  status: SuctionStatusType;
  onChange: (type: SuctionStatusType) => void;
};

const SuctionStatus = ({ status, onChange }: StatusProp) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(status.date);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with input value
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleApproveClick = () => {
    setEditing(false);
    status.progress = "Approved";
    onChange(status);
  };

  return (
    <div className="flex-1 min-w-full border-2 px-6 py-4 rounded-md">
      <div className="font-medium">Suction Status</div>
      <div className="flex text-xl gap-2 my-2 py-2">
        {status.progress} for
        <input
          className={`outline-none items-center text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="datetime-local"
          onChange={handleInputChange}
          value={inputValue}
          disabled={!editing}
        />
      </div>

      <div className="w-full justify-between">
        {/* Only display edit button if not editing the value */}
        {!editing && (
          <button
            className="px-2 py-1 rounded-md border-2"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
        {/* Only display approve button if editing the value */}
        {editing && (
          <button
            className="px-2 py-1 rounded-md border-2 text-approve-green"
            onClick={handleApproveClick}
          >
            Approve
          </button>
        )}
      </div>
    </div>
  );
};

export default SuctionStatus;
