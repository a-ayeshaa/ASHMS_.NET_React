import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axiosConfig from "../AllUserComponents/axiosConfig";
import moment from "moment/moment";
const TransactionDetails = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState([]);
    const [tran, setTran] = useState([]);
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        axiosConfig.get(`/testtransaction/patient/details/${id}`).then((rsp) => {
            setTransaction(rsp.data);
            setPatient(rsp.data.Patient);
            debugger;
        }, (err) => {
            debugger;
        })
        axiosConfig.get(`/testcarts/transaction/${id}`).then((rsp) => {
            setTran(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })
    }, [])
    return (
        <div>
            <Navbar />
            <fieldset style={{ width: "70%" }}>
                <legend style={{ textAlign: "center" }}>Receipt#{transaction.Id}</legend>
                <fieldset>
                    <div style={{ display: "inline-block", paddingRight: "300px" }}>
                        <div style={{ textAlign: "left" }}>
                            Name: {patient.Name}<br />
                            Date Of Birth: {moment(patient.DateOfBirth).format("Do MMMM YYYY")} <br />
                            Blood Group: {patient.BloodGroup}
                        </div>
                    </div>
                    <div style={{ display: "inline-block", width: "350px" }}>
                        <div>
                            Gender: {patient.Gender}<br />
                            Phone: {patient.Phone} <br />
                            Registered Date: {moment(patient.RegisteredAt).format("Do MMMM YYYY")}
                        </div>
                    </div>
                    <br/>
                    <span>Report Delivery Status : {transaction.Report_Delivered}</span>
                </fieldset>
                <fieldset>
                    <h3>Ordered Tests</h3>
                    <div>
                        <ul>
                            {
                                tran.map((t) =>
                                    <li key={t.Id}>
                                        <span style={{ paddingRight: "100px" }}>
                                            {t.TestDTO.Name} x1
                                        </span>
                                        <span>
                                            {t.TestDTO.Price} Bdt
                                        </span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        Total :
                        <b>
                            {transaction.Total} Bdt
                        </b>
                    </div>

                </fieldset>
            </fieldset>
        </div>
    )
}

export default TransactionDetails;