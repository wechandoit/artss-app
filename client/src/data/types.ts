export interface PatientType {
  id: number;
  fName: string;
  lName: string;
  roomNo: string;
  dist: number; // in CM
  freq: number; // per hour
  suctions: SuctionType[]; //
  tubeType: string;
}

export interface SuctionType {
  id: number;
  status: string; // scheduled, approved, suctioning
  date: string; // ISO string for the date "YYY-MM-DDTHH:MM"
  passes?: number; // optional (integer ranging 1-3)
}

export const defaultSuction: SuctionType = {
  id: 0,
  status: "Scheduled",
  date: new Date().toISOString(),
};

export const defaultPatient: PatientType = {
  id: 0,
  fName: "",
  lName: "",
  roomNo: "",
  dist: 0,
  freq: 0,
  suctions: [defaultSuction],
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
