import { API_URL } from "@/env"; // TODO: change to DB_URL ?
import { PatientType } from "./types";

// Fetch all patients
export const fetchPatients = async (): Promise<PatientType[]> => {
  const response = await fetch(`${API_URL}/patients`);
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return await response.json();
};

// Delete a patient by id
export const deletePatient = async (id: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/patients/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return true;
};

// Create a patient
export const createPatient = async (
  patient: Omit<PatientType, "id" | "suctions">,
): Promise<PatientType> => {
  const response = await fetch(`${API_URL}/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patient),
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return await response.json();
};

// Edit a patient
export const editPatient = async (
  id: number,
  edits: Partial<Omit<PatientType, "id" | "suctions">>,
): Promise<PatientType> => {
  const response = await fetch(`${API_URL}/patients/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(edits),
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return await response.json();
};