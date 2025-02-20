import { fetchPatients } from "@/data/api";
import { PatientType } from "@/data/types";
import { useState, useEffect } from "react";

const useFetchPatients = () => {
  // define patients state variable
  const [patients, setPatients] = useState<PatientType[]>([]);

  // function that fetches the patients from the api
  const loadPatients = async () => {
    try {
      const fetchedPatients = await fetchPatients();
      setPatients([...fetchedPatients]);
    } catch (err) {
      const error = (err as Error).message ?? "Unable to load patients :(";
      // TODO: display error as a toast/notification
      console.error(error);
    }
  };

  // update the patients
  useEffect(() => {
    loadPatients();
  }, []);

  return { patients, setPatients };
};

export default useFetchPatients;
