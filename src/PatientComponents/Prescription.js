import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Logout from "../AllUserComponents/Logout";
import Navbar from "./Navbar";
import moment from "moment";
import GenericPdfDownloader from "./GenericPdfDownloader";
const Prescription = () => {
    const { ID } = useParams();
    const [pres, setPres] = useState([]);
    const [doc, setDoc] = useState([]);
    const [pat, setPat] = useState([]);
    const [a, setA] = useState([]);
    const [med, setMed] = useState([]);
    useEffect(() => {
        axiosConfig.get(`/patient/${ID}/prescription`).then((rsp) => {
            setPres(rsp.data.Prescription[0]);
            setA(rsp.data);
            debugger;
            axiosConfig.get(`/doctors/${rsp.data.Doctor_Id}`).then((resp) => {
                setDoc(resp.data);
                debugger
            }, (err) => {

            })
            axiosConfig.get(`/patients/${rsp.data.Patient_Id}`).then((resp) => {
                setPat(resp.data);
                debugger
            }, (err) => {

            })
            axiosConfig.get(`/prescription/med/${rsp.data.Prescription[0].Id}`).then((resp) => {
                setMed(resp.data);
                debugger
            }, (err) => {

            });

        }, (err) => {
            debugger;
        })
    }, [])
    return (
        <div>

            <Navbar />
            <fieldset style={{ width: "70%" }} id={"pres"}>
                <legend style={{ textAlign: "center" }}>Prescription</legend>
                <fieldset>
                    <legend style={{ textAlign: "center" }}>Details</legend>
                    <div style={{ display: "inline-block", paddingRight: "300px" }}>
                        <div style={{ textAlign: "left" }}>
                            Patient Name : {pat.Name} <br />
                            Patient Date of Birth : {moment(pat.DateOfBirth).format("Do MMMM YYYY")} <br />
                            Blood Group: {pat.BloodGroup}
                            Gender: {pat.Gender}<br />
                            Phone: {pat.Phone} <br />
                            Registered Date: {moment(pat.RegisteredAt).format("Do MMMM YYYY")}
                        </div>
                    </div>
                    <div style={{ display: "inline-block", width: "350px", verticalAlign: "top" }}>
                        <div>
                            Doctor Name: {doc.Name} <br />
                            Specialization : {doc.Specialization} <br />
                            Degree : {doc.Degree} <br />
                            Date of Appointment : {moment(a.startedAt).format("Do MMMM YYYY")} <br />
                            Appointment_Id#{pres.Appointment_Id}
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend style={{ textAlign: "center" }}>Findings</legend>

                    Chief Complaint: {pres.Chief_complaint} <br />
                    On Evaluation: {pres.On_evaluation} <br />
                    Deduction: {pres.Deduction} <br />
                    Advancement: {pres.Advancement} <br />
                    ------------------------------------<br />
                    Medicines : <br />
                    <ul>
                        {

                            med.map((m) =>
                                <li>
                                    {m.Medicine.Name} <br />
                                    Doze: {m.Doze} <br />
                                    Continuation :
                                    {
                                        m.Continuation != null
                                            ? m.Continuation
                                            : " NULL"
                                    }
                                </li>
                            )


                        }
                    </ul>
                </fieldset>
            </fieldset>

            <GenericPdfDownloader downloadFileName={"Prescription"} rootElementId={"pres"}/>
        </div>
    )
}

export default Prescription;