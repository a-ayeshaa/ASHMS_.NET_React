import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axiosConfig.get("/doctors").then((rsp) => {
            setDoctors(rsp.data);
            debugger;
        }, (err) => {

        });
    }, [])
    return (
        <div>
            <Navbar/>
            <center>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Degree</th>
                            <th>Visiting Days</th>
                            <th>Session Fee</th>
                            
                        </tr>
                    </thead>
                    {
                        doctors.map((doc) =>
                            <tbody>
                                <tr key={doc.Id}>
                                    <td>{doc.Name}</td>
                                    <td>{doc.Specialization}</td>
                                    <td>{doc.Degree}</td>
                                    <td>{doc.VisitingDays}</td>
                                    <td>{doc.Appointment_Fees} Bdt</td>
                                    <td><a href={`/patient/doctorlist/${doc.Id}`}>Book Appointment</a></td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </center>
        </div>
    )
}

export default DoctorList;