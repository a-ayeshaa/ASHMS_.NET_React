import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Logout from "../AllUserComponents/Logout";
import Navbar from "./Navbar";

const Appointments = () => {
    const [app, setApp] = useState([]);
    useEffect(() => {
        axiosConfig.get("/patient/appointment/all").then((rsp) => {
            setApp(rsp.data);
            debugger
        }, (err) => {
            debugger;
        })
    },[]);
    return (
        <div>
            
            <Navbar />
            <center>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Degree</th>
                            <th>Session Fee</th>
                            <th>Appointment Date</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    {
                        app.map((doc) =>
                            <tbody>
                                <tr key={doc.Id}>
                                    <td>{doc.Doctor.Name}</td>
                                    <td>{doc.Doctor.Specialization}</td>
                                    <td>{doc.Doctor.Degree}</td>
                                    <td>{doc.Doctor.Appointment_Fees} Bdt</td>
                                    <td>{moment(doc.startedAt).format("dddd, MMMM Do YYYY")}</td>
                                    <td>{doc.status}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </center>
        </div>
    )
}

export default Appointments;