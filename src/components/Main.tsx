"use client";
import useGetApplicationIds from "@/hooks/useGetApplicationIds";
import AppInfo from "./AppInfo";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { BounceLoader, RotateLoader } from "react-spinners";

export default function Main() {
  const [application, setApplication] = useState({} as ApplicationType);
  const applications = useGetApplicationIds();
  useEffect(() => {
    setApplication(applications[0]);
  }, [applications]);
  return (
    <main className="w-full flex flex-col h-screen">
      {applications.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <RotateLoader color="#37146B" />
        </div>
      ) : (
        <>
          <div className="h-[8%]">
            <Navbar
              selectedApp={application}
              applications={applications}
              setApplication={setApplication}
            />
          </div>
          <div className="h-[92%]">
            <AppInfo selectedApp={application} />
          </div>{" "}
        </>
      )}
    </main>
  );
}
