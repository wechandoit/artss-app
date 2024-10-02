export interface PatientType {
  id: number;
  fName: string;
  lName: string;
  roomNo: string;
  dist: number; // in CM
  freq: number; // per hour
  status: SuctionStatusType;
  tubeType: string;
}

export interface SuctionStatusType {
  progress: string; // scheduled, approved, suctioning
  date: string; // ISO string for the date "YYY-MM-DDTHH:MM"
}

export const defaultPatient: PatientType = {
  id: 0,
  fName: "",
  lName: "",
  roomNo: "",
  dist: 0,
  freq: 0,
  status: {
    progress: "Scheduled",
    date: "",
  },
  tubeType: "",
};

export const tubeTypes = [
  { value: "sfa4", label: "Shiley Flex Adult 4" },
  { value: "sfa5", label: "Shiley Flex Adult 5" },
  { value: "sfa6", label: "Shiley Flex Adult 6" },
  { value: "sfa7", label: "Shiley Flex Adult 7" },
  { value: "sfa8", label: "Shiley Flex Adult 8" },
  { value: "sfa9", label: "Shiley Flex Adult 9" },
  { value: "sfa10", label: "Shiley Flex Adult 10" },
  { value: "sfp", label: "Shiley Flex Pediatric" },
];
