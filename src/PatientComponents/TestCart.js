import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";
import TotalAmount from "./TotalAmount";
const TestCart = () => {
    const [testcart, setTestcart] = useState([]);
    const [user, setUser] = useState("");
    const [succ, setSucc] = useState([]);

    useEffect(() => {
        axiosConfig.get(`/patient/details`).then((rsp) => {
            setUser(rsp.data.PatientDTO.Name);
            debugger
        }, (err) => {
            debugger;
        })
        axiosConfig.get("/patient/testcarts").then((rsp) => {
            setTestcart(rsp.data);
        }, (err) => {
            debugger;
        })
    }, [])
    const handleSubmit = () => {
        axiosConfig.get("/testtransactions/add").then((rsp) => {
            window.location.href="/patient/transactions";
            debugger
        }, (err) => {
            debugger
        })
    }
    return (
        <div style={{ marginLeft: "10px" }}>
            <Navbar />
            <fieldset style={{ width: "50%", margin: "10px" }}>
                Selected Tests for {user}
            </fieldset>
            <table border="1">
                <thead>
                    <tr>
                        <th>Test Name</th>
                        <th>Test Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        testcart.map((test) =>
                            <tr key={test.Id}>
                                <td>{test.TestDTO.Name}</td>
                                <td>{test.TestDTO.Price} Bdt.</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <TotalAmount />

            <br />
            <button onClick={() => { handleSubmit() }}>ORDER</button>
        </div>

    )
}

export default TestCart;