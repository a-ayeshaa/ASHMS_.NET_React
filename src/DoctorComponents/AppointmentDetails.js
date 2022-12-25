import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import { useParams } from "react-router-dom";
import moment from "moment";
import StartApp from "./buttons/StartApp";
import Prescription from "./buttons/Prescription";
import Complete from "./buttons/Complete";
import buttonSelect from "./buttons/buttonSelect";

const AppointmentDetails = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState([]);
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    axiosConfig.get(`/doctor/appointments/${id}`).then(
      (rsp) => {
        setPatient(rsp.data.Patient);
        setAppointment(rsp.data);
        //setDoctor(rsp.data.Name);
        //setPatients(rsp.data.Appointments[0].Patient.Name);
        debugger;
      },
      (err) => {
        debugger;
      }
    );
  }, []);

  if (appointment.revisit_count === 0) {
    appointment.revisit_count = "First Time";
  }

  return (
    <div>
        <div>
        <center>
          <fieldset style={{ margin: "15px" }}>
            <b>Appointment Details</b>
          </fieldset>
        </center>
      </div>
      <table border="1">
        <tr>
          <td>
            <b>Patient Name: </b>
          </td>
          <td>{patient.Name}</td>
        </tr>

        <tr>
          <td>
            <b>Patient Gender: </b>
          </td>
          <td>{patient.Gender}</td>
        </tr>

        <tr>
          <td>
            <b>Blood Group: </b>
          </td>
          <td>{patient.BloodGroup}</td>
        </tr>

        <tr>
          <td>
            <b>Date of Birth: </b>
          </td>
          <td>{moment(patient.DateOfBirth).format("DD MMMM YYYY")}</td>
        </tr>

        <tr>
          <td>
            <b>Revisit: </b>
          </td>
          <td>{appointment.revisit_count}</td>
        </tr>

        <tr>
          <td>
            <b>Status: </b>
          </td>
          <td>{appointment.status}</td>
        </tr>
        {/* <tr><td><buttonSelect status = {appointment.status}/></td></tr> */}
        <tr>
          <td>
            {appointment.status === "Complete" ? (
              <Complete />
            ) : (
              <StartApp appointment={appointment.Id} />
            )}
          </td>
        </tr>
      </table>
    </div>
  );
};
export default AppointmentDetails;
