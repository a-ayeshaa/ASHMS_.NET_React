import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
const Config=()=>{
    const [appointments, setAppointments] = useState([]);
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
            axiosConfig.get("/doctor/appointments").then((rsp)=>{
                setAppointments(rsp.data.Appointments);
                setDoctor(rsp.data.Name);
                //setPatients(rsp.data.Appointments[0].Patient.Name);
                debugger;
            },
            (err) => {
                debugger;
            });
        },[])
        //appointments;
        return appointments;
        
}
export default Config;
