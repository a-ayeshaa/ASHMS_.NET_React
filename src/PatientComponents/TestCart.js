import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";
const TestCart = () => {
    const [testcart, setTestcart] = useState([]);
    const [name,setName] = useState([]);
    const [succ, setSucc] = useState([]);

    useEffect(() => {
        // axiosConfig.get(`/patient/${localStorage.getItem("_authToken")}`).then((rsp)=>{
        //     setName(rsp.data);
        //     debugger
        // },(err)=>{
        //     debugger;
        // })
        axiosConfig.get("/patient/testcarts").then((rsp) => {
            setTestcart(rsp.data);
        }, (err) => {
            debugger;
        })
    }, [])

    return (
        <div style={{ marginLeft: "10px" }}>
            <Navbar />
            <fieldset style={{ width: "50%",margin:"10px" }}>
                Selected Tests for 
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
        </div>
    )
}

export default TestCart;