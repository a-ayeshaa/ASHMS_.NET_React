import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";

const ViewAppointment=()=>{
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        axiosConfig.get("/appointments").then((rsp)=>{
            setAppointments(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        });
    },[])

    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Doctor_id</th>
                        <th>Patient_id</th>
                        <th>start</th>
                        <th>ended</th>
                        <th>status</th>
                        <th>revisit count</th>
                    </tr>
                </thead>
                <tbody>
                {
                    appointments.map((app)=>
                    <tr key={app.Id}>
                        <td>{app.Doctor_Id}</td>
                        <td>{app.Patient_Id}</td>
                        <td>{app.startedAt}</td>
                        <td>{app.endedAt}</td>
                        <td>{app.status}</td>
                        <td>{app.revisit_count}</td>
                    </tr>
                    )
                
                }
                </tbody>
            </table>
        </div>
    )
}
export default ViewAppointment;