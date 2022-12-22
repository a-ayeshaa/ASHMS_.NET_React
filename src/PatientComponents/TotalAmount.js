import { useEffect, useState } from "react";

const TotalAmount=()=>{
    const [bill,setBill]=useState(0);
    useEffect(()=>{

    },[])
    return(
        <div>
            Total Bill = {bill} Bdt.
        </div>
    )
}

export default TotalAmount;