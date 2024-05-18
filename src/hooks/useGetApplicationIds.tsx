"use client";
import { useEffect, useState } from "react";

export default function useGetApplicationIds() {
  const [applicationIds, setApplicationIds] = useState([]);
  useEffect(() => {
    const getApplicationIds = async () => {
      const response = await fetch("https://retoolapi.dev/71NNjB/applications");
      const data = await response.json();
      setApplicationIds(data);
    };
    getApplicationIds();
  }, []);
  return applicationIds;
}
