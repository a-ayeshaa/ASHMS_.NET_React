import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const TestList = () => {
    const [tests, setTests] = useState([]);
    const [id,setId]=useState(0);
    const [val,setVal]=useState("");
    const [succ, setSucc] = useState([]);

    useEffect(() => {
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
        axiosConfig.post("/testcarts/add",data).then((rsp)=>{
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
            <h3>
                Available Tests
            </h3>
            <table border="1">
                <thead >
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
                            <td>{test.Price} Bdt</td>
                            <td>
                                <form onSubmit={AddtoCart}>
                                    <input type="submit" onClick={(e)=>{setId(test.Id);setVal(test.Name+" has been added to cart")}} name="addtoCart" value="ORDER"/>
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