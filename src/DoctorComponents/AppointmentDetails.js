import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import { useParams } from "react-router-dom";

const AppointmentDetails=()=>{
    const {id} = useParams();
    const [appointments, setAppointments] = useState([]);
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
            axiosConfig.get(`/doctor/appointments/${id}`).then((rsp)=>{
                setAppointments(rsp.data);
                //setDoctor(rsp.data.Name);
                //setPatients(rsp.data.Appointments[0].Patient.Name);
                debugger;
            },
            (err) => {
                debugger;
            });
        },[])
    
        
    
    return(
        <div>
            <h1>{appointments.Patient.Name}</h1>
        </div>
    )
}
export default AppointmentDetails;