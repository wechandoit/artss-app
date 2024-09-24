import { useState } from "react";

type FreqProp = {
  freq: number;
  onChange: (type: number) => void;
};

const SuctionFreq = ({ freq, onChange }: FreqProp) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(freq.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update state with input value
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleDoneClick = () => {
    setEditing(false);
    onChange(parseInt(inputValue));
  };

  return (
    <div className="flex-col max-w-min border-2 px-6 py-4 rounded-md">
      <div className="font-medium">Suction Frequency</div>
      <div className="flex text-xl gap-2 my-2 py-2">
        Every
        <input
          className={`outline-none w-10 text-center text-xl ${editing ? "bg-gray-100" : "bg-transparent"}`}
          type="number"
          onChange={handleInputChange}
          value={inputValue}
          disabled={!editing}
        />
        HR(S)
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

export default SuctionFreq;
