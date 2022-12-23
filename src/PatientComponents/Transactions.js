import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const Transactions = () => {
    const [transaction, setTransaction] = useState([]);
    useEffect(() => {
        axiosConfig.get("/testtransactions").then((rsp) => {
            setTransaction(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })
    }, [])
    return (
        <div>
            <Navbar />
            <center>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Transaction Id</th>
                            <th>Reference</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Report Delivery Status</th>

                        </tr>
                    </thead>
                    {
                        transaction.map((t) =>
                            <tbody>
                                <tr key={t.Id}>
                                    <td>{t.Id}</td>
                                    <td>{t.Reference}</td>
                                    <td>{t.Total} Bdt</td>
                                    <td>{t.Status}</td>
                                    <td>{t.Date}</td>
                                    <td>{t.Report_Delivered}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </center>
        </div>
    )
}

export default Transactions;