import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const BookAppointment = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    const [days, setDays] = useState("");
    const [day, setDay] = useState([]);
    const [appointment, setAppointment] = useState([]);
    const [user, setUser] = useState("");
    const [succ, setSucc] = useState([]);

    useEffect(() => {
        axiosConfig.get(`/doctors/${id}`).then((rsp) => {
            setDoctor(rsp.data);
            setDays(rsp.data.VisitingDays);
            setDay(rsp.data.VisitingDays.split(","));
            console.log(day);
            debugger;
        }, (err) => {
            debugger;
        })

        axiosConfig.get(`/doctor/appointment/${id}`).then((rsp) => {
            setAppointment(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })

        axiosConfig.get(`/patient/details`).then((rsp) => {
            setUser(rsp.data.PatientDTO.Id);
            debugger
        }, (err) => {
            debugger;
        })
    }, [succ])

    const Book=()=>{
        const data = {Doctor_Id:id, Patient_Id:user, startedAt:moment().day(days),status:"Waiting"};
        
        console.log(moment().day(days).toString());
        debugger;
        axiosConfig.post("/patient/appointment/book",data).then((rsp)=>{
            setSucc("Appointment booked for "+days);
            debugger;
        },(err)=>{
            debugger;
        });
    }
    return (
        <div>
            <Navbar />
            <center>
                <fieldset style={{width:"70%"}}>
                    <div style={{ textAlign: "left" }}>
                        {doctor.Name}
                    </div>
                    <div style={{ textAlign: "right" }}>
                        {doctor.Specialization} <br />
                        {doctor.Degree} <br />
                        {doctor.VisitingDays}
                    </div>
                    <br />
                    {
                        day.map((d) =>
                            <fieldset key={d} style={{ display: "inline-block" }}>
                                <legend>{d}</legend>
                                Patient Queue : {appointment[d]}
                            </fieldset>
                        )
                    }
                    <br />
                    <div style={{margin:"20px"}}>
                        Book an appointment: <br />
                        Select a Day :
                        <select onChange={(e) => { setDays(e.target.value) }}>
                            <option disabled={true}>Options:</option>
                            {
                                day.map((d) =>
                                    <option key={d} value={d} >{d}</option>
                                )
                            }
                        </select>
                        <br/>
                        <button onClick={()=>{Book();}}>BOOK</button>
                        <br/>
                        <span style={{color:"green"}}>
                            {succ}
                        </span>
                    </div>

                </fieldset>

            </center>
        </div>
    )
}

export default BookAppointment;