import SuctionStatus from "./patientinfo/suctionstatus";
import SuctionDistance from "./patientinfo/suctiondist";
import TubeType from "./patientinfo/tubetype";
import SuctionFreq from "./patientinfo/suctionfreq";
import { PatientType } from "@/data/types";
import DeleteDialog from "./patientinfo/deletedialog";
import useModifyPatients from "@/hooks/useModifyPatients";

/* PatientProps
  initialPatient: the initial patient object to be rendered
  setPatients: set state for patients objects
 */
type PatientProps = {
  patient: PatientType;
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const Patient = ({ patient, setPatients }: PatientProps) => {
  // state variable of the patient being displayed
  // const [patient, setPatient] = useState<PatientType>(initialPatient);
  const { tryUpdatePatient } = useModifyPatients(setPatients);

  const onSave = (propName: string, newValue: any) => {
    tryUpdatePatient(patient.id, { [propName]: newValue });
  };

  return (
    <div className="flex-col min-w-full space-y-8">
      <div className="flex justify-between items-start">
        <div className="text-2xl">
          {/* Display patient info: name, room number */}
          <div className="font-semibold">{`${patient.fName} ${patient.lName}`}</div>
          <div>{`Room No. ${patient.roomNo}`}</div>
        </div>
        <button className="bg-gray-200 btn-primary">Edit</button>
      </div>
      <div className="flex flex-wrap min-w-full gap-2 justify-between">
        {/* Display patient suctioning info/parameters */}
        <SuctionStatus suction={patient.suctions[0]} onSave={onSave} />
        <SuctionDistance dist={patient.dist} onSave={onSave} />
        <TubeType tubeType={patient.tubeType} onSave={onSave} />
        <SuctionFreq freq={patient.freq} onSave={onSave} />
      </div>
      {/* delete dialog control for deleting this patient */}
      <div className="flex justify-end ">
        <DeleteDialog patient={patient} setPatients={setPatients} />
      </div>
    </div>
  );
};

export default Patient;
