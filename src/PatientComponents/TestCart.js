import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const TestCart = () => {
    const [testcart, setTestcart] = useState([]);
    const [user, setUser] = useState("");
    const [doc, setdoc] = useState("Self");
    const [doctors, setdoctors] = useState([]);
    const [bill, setBill] = useState(0);
    const [id, setId] = useState(0);
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

        axiosConfig.get("/patient/testcarts/total").then((rsp) => {
            setBill(rsp.data);
            debugger
        }, (err) => {

        })
        axiosConfig.get("/doctors").then((rsp) => {
            setdoctors(rsp.data);
            debugger;
        }, (err) => {
            debugger;
        })
    },[testcart])
    const handleSubmit = () => {
        const data = {Reference:doc};
        axiosConfig.post("/testtransactions/add",data).then((rsp) => {
            window.location.href = "/patient/transactions";
            debugger
        }, (err) => {
            debugger
        })
    }

    const Remove = () => {
        axiosConfig.get(`/testcarts/delete/${id}`).then((rsp) => {
            debugger;
            
        }, (err) => {
            debugger;
        })
    }
    return (
        <div style={{ marginLeft: "10px" }}>
            <Navbar />
            <fieldset style={{ width: "50%", margin: "10px" }}>
                <span>
                    Selected Tests for {user}
                </span>
                <div style={{ textAlign: "right" }}>
                    Reference:
                    <select onChange={(e)=>{setdoc(e.target.value)}}>
                        <option>Self</option>
                        {
                            doctors.map((d) =>
                                <option key={d.Id} value={d.Name} >{d.Name}</option>
                            )
                        }
                    </select>
                </div>
            </fieldset>
            <table border="1" style={{ margin: "10px" }}>
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
                                <td><button onClick={() => { setId(test.Id); Remove(); }}>Remove</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div>
                Total Bill = {bill} Bdt.
            </div>

            <br />
            <button onClick={() => { handleSubmit() }}>ORDER</button>
        </div>

    )
}

export default TestCart;