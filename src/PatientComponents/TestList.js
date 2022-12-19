import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import Navbar from "./Navbar";

const TestList = () => {
    const [tests, setTests] = useState([]);
    const [id,setId]=useState();
    const [val,setVal]=useState("");
    useEffect(() => {
        axiosConfig.get("/tests").then((rsp) => {
            setTests(rsp.data);
        }, (err) => {
            debugger;
        })
    }, [])

    const AddtoCart=()=>{
        console.log(id);
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
                                <button onClick={(e)=>(AddtoCart(setId(test.Id),setVal(test.Name+ " added to cart")))}>
                                    Order
                                </button>
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