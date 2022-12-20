import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const TestList = () => {
    const [tests, setTests] = useState([]);
    const [id,setId]=useState();
    const [val,setVal]=useState("");
    const [succ, setSucc] = useState([]);

    useEffect(() => {
        localStorage.setItem("_authToken","6539b349-fdb4-4c59-91dc-c10fd3f873a6");
        axiosConfig.get("/tests").then((rsp) => {
            setTests(rsp.data);
        }, (err) => {
            debugger;
        })
    }, [])

    const AddtoCart=(event)=>{
        event.preventDefault();
        console.log(id);
        debugger;
        const data={"Test_Id":id};
        axiosConfig.post("/testcart/add",data).then((rsp)=>{
            setSucc(rsp.data);
            debugger
        },(err)=>{
            debugger
        })
    }
    return (
        <div  style={{ marginLeft: "10px" }}>
            <Navbar />
            <div style={{color:"red"}}>
                {val}
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Test Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tests.map((test) =>
                        <tr key={test.Id}>
                            <td>{test.Name}</td>
                            <td>{test.Price}</td>
                            <td>
                                <form onSubmit={AddtoCart}>
                                    <input type="submit" onClick={(e)=>{setId(test.Id);}} name="addtoCart" value="ORDER"/>
                                </form>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default TestList;