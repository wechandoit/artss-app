import SuctionStatus from "./patientinfo/suctionstatus";
import SuctionDistance from "./patientinfo/suctiondist";
import TubeType from "./patientinfo/tubetype";
import SuctionFreq from "./patientinfo/suctionfreq";
import { PatientType, SuctionStatusType } from "@/data/types";
import { Pencil2Icon } from "@radix-ui/react-icons";
import DeleteDialog from "./patientinfo/deletedialog";

type PatientProps = {
  patient: PatientType;
  setPatients: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const Patient = ({ patient, setPatients }: PatientProps) => {
  // functions to change patient info
  const setDist = (newDist: number) => {
    // setPatient((prevPatient) => ({
    //   ...prevPatient,
    //   dist: newDist,
    // }));
  };
  const setFreq = (newFreq: number) => {
    // setPatient((prevPatient) => ({
    //   ...prevPatient,
    //   freq: newFreq,
    // }));
  };
  const setTubeType = (newTube: string) => {
    // setPatient((prevPatient) => ({
    //   ...prevPatient,
    //   tubeType: newTube,
    // }));
  };
  const setStatus = (newStatus: SuctionStatusType) => {
    // setPatient((prevPatient) => ({
    //   ...prevPatient,
    //   status: newStatus,
    // }));
  };

  return (
    <div className="flex-col min-w-full space-y-8">
      <div className="flex min-w-full justify-between">
        <div className="text-2xl">
          <div className="font-semibold">{`${patient.fName} ${patient.lName}`}</div>
          <div>{`Room No. ${patient.roomNo}`}</div>
        </div>
        <button className="h-8 p-1 rounded-md border-2">
          <Pencil2Icon className="w-4 h-4" />
        </button>
      </div>
      <div className="flex flex-wrap min-w-full gap-2 justify-between">
        <SuctionStatus status={patient.status} onChange={setStatus} />
        <SuctionDistance dist={patient.dist} onChange={setDist} />
        <TubeType type={patient.tubeType} onChange={setTubeType} />
        <SuctionFreq freq={patient.freq} onChange={setFreq} />
      </div>
      <div className="flex justify-end ">
        <DeleteDialog patient={patient} setPatients={setPatients} />
      </div>
    </div>
  );
};

export default Patient;
