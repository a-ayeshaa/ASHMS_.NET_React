import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const BookAppointment = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    const [days, setDays] = useState("");
    const [day, setDay] = useState([]);
    const [appointment,setAppointment]=useState([]);

    useEffect(() => {
        axiosConfig.get(`/doctors/${id}`).then((rsp) => {
            setDoctor(rsp.data);
            setDays(rsp.data.VisitingDays);
            setDay(days.split(","));
            console.log(day);
            debugger;
        }, (err) => {
            debugger;
        })
    },[])
    return (
        <div>
            <Navbar />
            <center>
                <fieldset>
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
                            </fieldset>
                        )
                    }
                </fieldset>
            </center>
        </div>
    )
}

export default BookAppointment;