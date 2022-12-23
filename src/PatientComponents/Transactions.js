import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const Transactions = () => {
    const [transaction, setTransaction] = useState([]);
    const [tran, setTran] = useState([]);
    const [id, setId] = useState(0);
    const [bool, setBool] = useState(false);
    useEffect(() => {
        axiosConfig.get("/testtransaction/patient").then((rsp) => {
            setTransaction(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })
    }, [])
    const ViewItems = () => {
        setBool(true);
        axiosConfig.get(`/testcarts/transaction/${id}`).then((rsp) => {
            setTran(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })
    }

    const viewTransaction=()=>{
        window.location.href=`/patient/transactions/${id}`;
    }
    return (
        <div>
            <Navbar />
            <div style={{ display: "inline-block",margin: "10px", verticalAlign : "top" }}>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Transaction Id</th>
                            <th>Reference</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Report Delivery Status</th>
                            <th>Ordered Tests</th>

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
                                    <td>
                                        <button onClick={()=>{setId(t.Id);viewTransaction();}} onMouseOver={() => { setId(t.Id); ViewItems(); }} >
                                            CHECK ORDERED TESTS
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
            {
                bool == true
                    ?
                    <div style={{ display: "inline-block", margin: "10px" , verticalAlign : "top" }}>
                        <fieldset>
                            <table style={{ color: "red" }}>
                                <tr>
                                    <td>Ordered Tests:</td>
                                </tr>
                                {
                                    tran.map((t) =>
                                        <tr>
                                            <td key={t.Id}>{t.TestDTO.Name} x 1 =</td>

                                            <td style={{ padding: "10px", margin: "10px" }}>{t.TestDTO.Price} Bdt</td>
                                        </tr>

                                    )

                                }
                            </table>
                        </fieldset>
                    </div>
                    : ""

            }

        </div>
    )
}

export default Transactions;