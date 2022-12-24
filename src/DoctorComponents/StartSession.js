import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import { useParams } from "react-router-dom";
const StartSession=()=>{
    const {id} = useParams();
    const [appointments, setAppointments] = useState([]);
    //const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        axiosConfig.get(`/appointments/${id}`).then((rsp)=>{
            setAppointments(rsp.data);
           // setDoctor(rsp.data.Name);
            //setPatients(rsp.data.Appointments[0].Patient.Name);
            debugger;
        },
        // axiosConfig.get(`/apppointment/get/${id}`).then((rsp)=>{
        //     setAppointments(rsp.data);
        //    // setDoctor(rsp.data.Name);
        //     //setPatients(rsp.data.Appointments[0].Patient.Name);
        //     debugger;
        // },
        (err) => {
            debugger;
        });
    },[])
    return(
        <h1>{appointments.status}</h1>
    );

}
export default StartSession;       