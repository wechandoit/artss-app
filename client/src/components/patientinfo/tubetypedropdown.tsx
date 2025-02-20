import { tubeTypes } from "@/data/types";

/* Dropdown Props
  editing: states if the dropdown can be modified
  className: design classes to include
  value: the current value of the dropdown
  setValue: set state of the value of the dropdown
 */
type DropdownProps = {
  editing: boolean;
  className: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const TubeTypeDropdown = ({
  editing,
  className,
  value,
  setValue,
}: DropdownProps) => {
  return (
    <select
      id="tubetypes"
      className={`outline-none text-black ${className} ${editing ? "bg-gray-100" : "bg-transparent appearance-none"}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={!editing}
    >
      {/* list all the tube types */}
      <option className="text-gray-100" value="" disabled>
        Select a tube type
      </option>
      {tubeTypes.map((tube) => (
        <option key={tube.value} value={tube.value}>
          {tube.label}
        </option>
      ))}
    </select>
  );
};

export default TubeTypeDropdown;
