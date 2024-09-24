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
  line: string; // scheduled, approved, suctioning
  time: string; // in Date format
}
