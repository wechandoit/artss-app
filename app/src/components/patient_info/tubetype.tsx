import { useState } from "react";

type TubeProp = {
  type: string;
  onChange: (type: string) => void;
};

const TubeType = ({ type, onChange }: TubeProp) => {
  const [editing, setEditing] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(type.toString());

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleDoneClick = () => {
    setEditing(false);
    onChange(dropdownValue);
  };

  return (
    <div className="flex-col max-w-min border-2 px-6 py-4 rounded-md">
      <div className="font-medium">Tracheal Tube Type</div>
      <div className="text-black">
        <select
          className={`outline-none text-black my-2 py-2 text-xl w-48 ${editing ? "bg-gray-100" : "bg-transparent appearance-none"}`}
          id="dropdown"
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.target.value)}
          disabled={!editing}
        >
          <option value="sfa4">Shiley Flex Adult 4</option>
          <option value="sfa5">Shiley Flex Adult 5</option>
          <option value="sfa6">Shiley Flex Adult 6</option>
          <option value="sfa7">Shiley Flex Adult 7</option>
          <option value="sfa8">Shiley Flex Adult 8</option>
          <option value="sfa9">Shiley Flex Adult 9</option>
          <option value="sfa10">Shiley Flex Adult 10</option>
        </select>
      </div>

      {!editing ? (
        <button
          className="px-2 py-1 rounded-md border-2"
          onClick={handleEditClick}
        >
          Edit
        </button>
      ) : (
        <button
          className="px-2 py-1 rounded-md border-2"
          onClick={handleDoneClick}
        >
          Done
        </button>
      )}
    </div>
  );
};

export default TubeType;
