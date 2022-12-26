import React from "react";
import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Topbar from "../AllUserComponents/Topbar";
import moment from "moment";
import Logout from "../AllUserComponents/Logout";
import { NavigBar } from "./buttons/NavigBar";

export const DoctorProfile = () => {
  const [doc, setDoc] = useState([]);
  useEffect(() => {
    axiosConfig.get("/doctors/profile").then(
      (rsp) => {
        // setAppointments(rsp.data.Appointments);
        setDoc(rsp.data);
        //setPatients(rsp.data.Appointments[0].Patient.Name);
        debugger;
      },
      (err) => {
        debugger;
      }
    );
  }, []);

  return (
    <div>
        <Logout/>
        <NavigBar/>
      <fieldset>
        <legend>Doctor Profile</legend>
        <b>Doctor Name: </b>
        {doc.Name}
        <br />
        <b>Degree: </b>
        {doc.Degree}
        <br />
        <b>Specialization: </b>
        {doc.Specialization}
        <br />
        <b>Net Income: </b>
        {doc.Net_Earnings}
        <br />
        <b>Visiting Days: </b>
        {doc.VisitingDays}
      </fieldset>
    </div>
  );
};
