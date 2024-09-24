import { useState } from "react";

type DistProps = {
  dist: number;
  onChange: (type: number) => void;
};

const SuctionDistance = ({ dist, onChange }: DistProps) => {
  const [editing, setEditing] = useState(false);

  // initial value is from the data value
  const [inputValue, setInputValue] = useState(dist.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update state with input value
    setInputValue(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleDoneClick = () => {
    setEditing(false);
    onChange(parseInt(inputValue));
  };

  return (
    <div className="flex-col border-2 px-6 py-4 rounded-md">
      <div className="font-medium">Suction Distance</div>
      <div className="flex text-xl gap-2 my-2 py-2">
        <input
          className={`outline-none w-12 text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="number"
          onChange={handleInputChange}
          value={inputValue}
          disabled={!editing}
        />
        CM
      </div>
      {/* Only display edit button if not editing the value */}
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

export default SuctionDistance;
