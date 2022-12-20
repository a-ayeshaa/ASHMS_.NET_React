import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";
const TestCart = () => {
    const [testcart, setTestcart] = useState([]);
    const [succ, setSucc] = useState([]);

    useEffect(() => {
        localStorage.setItem("_authToken", "6539b349-fdb4-4c59-91dc-c10fd3f873a6");
        axiosConfig.get("/testcarts").then((rsp) => {
            setTestcart(rsp.data);
        }, (err) => {
            debugger;
        })
    }, [])

    return (
        <div style={{ marginLeft: "10px" }}>
            <Navbar />
            
            <table border="1">
                <thead>
                    <tr>
                        <th>Test Id</th>
                        <th>Patient Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        testcart.map((test) =>
                            <tr key={test.Id}>
                                <td>{test.Test_Id}</td>
                                <td>{test.Patient_Id}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TestCart;