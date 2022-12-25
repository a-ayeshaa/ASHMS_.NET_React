import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
//import Config from "./Config";

const ViewAppointment = () => {
  //<Config/>
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    axiosConfig.get("/doctor/appointments").then(
      (rsp) => {
        setAppointments(rsp.data.Appointments);
        setDoctor(rsp.data.Name);
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
      <table border="1">
        <thead>
          <tr>
            {/* <th>Doctor_id</th> */}
            <th>Patient Name</th>
            <th>start</th>
            <th>ended</th>
            <th>status</th>
            <th>revisit count</th>
            <th>See Details</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app.Id}>
              {/* <td>{doctor}</td> */}
              <td>{app.Patient.Name}</td>
              <td>{app.startedAt}</td>
              <td>{app.endedAt}</td>
              <td>{app.status}</td>
              <td>{app.revisit_count}</td>
              <td>
                <a href={`/doctor/appointments/details/${app.Id}`}>
                  See Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ViewAppointment;
