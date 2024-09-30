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
