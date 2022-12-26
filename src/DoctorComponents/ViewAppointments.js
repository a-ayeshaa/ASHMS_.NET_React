import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Topbar from "../AllUserComponents/Topbar";
import moment from "moment";
import Logout from "../AllUserComponents/Logout";
import { NavigBar } from "./buttons/NavigBar";
//import Config from "./Config";

const ViewAppointment = () => {
  //<Config/>
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [Id, setId] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    axiosConfig.get("/doctor/appointments").then(
      (rsp) => {
        setAppointments(rsp.data.Appointments);
        setDoctor(rsp.data);
        //setPatients(rsp.data.Appointments[0].Patient.Name);
        debugger;
      },
      (err) => {
        debugger;
      }
    );

  }, []);
  const checkPres = () => {
    axiosConfig.get(`/patient/${Id}/prescription`).then((rsp) => {
      window.location.href = `/doctor/prescription/${Id}`;
    }, (Err) => {
      setErr("No prescriptions available");
    })
  }
  return (
    <div>
        <Logout/>
        <NavigBar/>
      <div>
        <fieldset style={{ margin: "15px" }}>
          <div style={{ display: "inline-block" }} align="left">
            {doctor.Name}
          </div>
          <br />
          <div style={{ display: "inline-block" }}>
            <b>Appointment List</b>
          </div>
        </fieldset>
      </div>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            {/* <th>Doctor_id</th> */}
            <th>Patient Name</th>
            <th>Start</th>
            <th>Ended</th>
            <th>Status</th>
            <th>Revisit count</th>
            <th>See Details</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app.Id}>
              {/* <td>{doctor}</td> */}
              <td>{app.Patient.Name}</td>
              <td>{moment(app.startedAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
              <td>
                {app.endedAt != null
                  ? moment(app.endedAt).format("MMMM Do YYYY, h:mm:ss a")
                  : "N/A"}
              </td>
              <td>{app.status}</td>
              <td>{app.revisit_count}</td>
              <td>
                <a href={`/doctor/appointments/details/${app.Id}`}>
                  See Details
                </a>
              </td>
              <td>
                {
                  app.status == "Complete"
                    ? <button onClick={() => { setId(app.Id); checkPres(); }}>Prescription</button>

                    : ""
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};
export default ViewAppointment;
