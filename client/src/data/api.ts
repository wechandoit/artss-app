import { API_URL } from "@/env"; // TODO: change to DB_URL ?
import { PatientType } from "./types";

// Fetch all patients
export const fetchPatients = async (): Promise<PatientType[]> => {
  const response = await fetch(`${API_URL}/patients`);
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: PatientType[] = await response.json();
  return data;
};

// Delete a patient by id
export const deletePatient = async (id: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/patients/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  return true;
};

// Create a patient
export const createPatient = async (
  patient: PatientType,
): Promise<PatientType> => {
  const response = await fetch(`${API_URL}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patient),
  });
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: PatientType = await response.json();
  return data;
};

// Edit a patient
export const editPatient = async (
  id: number,
  edits: Partial<PatientType>,
): Promise<PatientType> => {
  console.log(edits);
  const response = await fetch(`${API_URL}/patients/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(edits),
  });
  if (!response.ok) {
    throw new Error(`API request failed! with status: ${response.status}`);
  }
  const data: PatientType = await response.json();
  return data;
};
