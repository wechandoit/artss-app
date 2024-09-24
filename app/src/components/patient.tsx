import SuctionStatus from "./patient_info/suctionstatus";
import SuctionDistance from "./patient_info/suctiondist";
import TubeType from "./patient_info/tubetype";
import SuctionFreq from "./patient_info/suctionfreq";
import { PatientType } from "@/data/types";

type PatientProps = {
  patient: PatientType;
  setPatient: React.Dispatch<React.SetStateAction<PatientType[]>>;
};

const Patient = ({ patient }: { patient: PatientType }) => {
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
  const setStatus = (newStatus: { line: string; time: string }) => {
    // setPatient((prevPatient) => ({
    //   ...prevPatient,
    //   status: newStatus,
    // }));
  };

  return (
    <div className="flex-col p-16 w-full">
      <div className="flex w-full justify-between">
        <div className="text-2xl font-semibold">{`${patient.fName} ${patient.lName}`}</div>
        <div className="text-2xl right-0">{`Room No. ${patient.roomNo}`}</div>
      </div>
      <div className="flex w-full mt-8 justify-between">
        <SuctionStatus status={patient.status} onChange={setStatus} />
        <SuctionDistance dist={patient.dist} onChange={setDist} />
        <TubeType type={patient.tubeType} onChange={setTubeType} />
        <SuctionFreq freq={patient.freq} onChange={setFreq} />
      </div>
    </div>
  );
};

export default Patient;
