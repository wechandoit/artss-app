import React, { useState } from "react";

type StatusProp = {
  status: {
    line: string; // scheduled, approved, suctioning
    time: string;
  };
  onChange: (type: { line: string; time: string }) => void;
};

const getTime = (dateStr: string) => {
  // parse into data object
  const milliseconds = Date.parse(dateStr);
  const date = new Date(milliseconds);
  // format parsed data object into string
  const hour = date.getHours();
  const min = date.getMinutes();
  const formatHour = hour % 12 || 12;
  const formatMin = min < 10 ? "0" + min : min;
  const ampm = hour >= 12 ? "PM" : "AM";
  return `${formatHour}:${formatMin} ${ampm}`;
};

const SuctionStatus = ({ status, onChange }: StatusProp) => {
  const time = getTime(status.time);

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(time);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with input value
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleApproveClick = () => {
    setEditing(false);
    status.line = "Approved";
    onChange(status);
  };

  return (
    <div className="border-2 px-6 py-4 rounded-md">
      <div className="font-medium">Suction Status</div>
      <div className="flex text-xl gap-2 my-2 py-2">
        {status.line} for
        <input
          className={`outline-none items-center text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="time"
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
        {/* Only display done button if editing the value */}
        {editing && (
          <button
            className="px-2 py-1 rounded-md border-2 custom-green"
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
