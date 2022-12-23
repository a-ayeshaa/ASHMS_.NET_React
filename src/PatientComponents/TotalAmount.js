import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";


const TotalAmount=()=>{
    const [bill,setBill]=useState(0);
    useEffect(()=>{
        axiosConfig.get("/patient/testcarts/total").then((rsp)=>{
            setBill(rsp.data);
            debugger
        },(err)=>{
            
        })
    },[])
    return(
        <div>
            Total Bill = {bill} Bdt.
        </div>
    )
}

export default TotalAmount;