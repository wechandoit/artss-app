import { useState } from "react";
import AddDialog from "./patientinfo/adddialog";
import { PatientType } from "@/data/types";

type patientsActionsProps = {
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const PatientsActions = ({ setPatients }: patientsActionsProps) => {
  // sort state variable controlling how the patients are sorted
  const [sort, setSort] = useState("status");
  // filter state variable controlling how the patients are filtered
  const [filter, setFilter] = useState("None");
  // TODO: define sort handler
  // TODO: define filter handler

  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="flex gap-4  p-2 bg-gray-100 rounded-lg">
        {/* Define the sort options for the patients */}
        <label htmlFor="sorts">Sort by:</label>
        <select
          id="sorts"
          className={"outline-none text-black bg-gray-100"}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="lName">Last Name</option>
          <option value="fName">First Name</option>
          <option value="roomNo">Room Number</option>
        </select>
        {/* Define the filter options for the patients */}
        <label htmlFor="filters">Filter by:</label>
        <select
          id="filters"
          className={"outline-none text-black bg-gray-100"}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="status">Status (Scheduled)</option>
          <option value="lName">Status (Suctioning)</option>
          {/* TODO: add options for selecting tube types */}
        </select>
      </div>
      {/* Add New Patient Dialog */}
      <AddDialog setPatients={setPatients} />
    </div>
  );
};

export default PatientsActions;
