import Prescription from "./Prescription";
import StartApp from "./StartApp";
import Complete from "./Complete";

const buttonSelect=({props})=>{
    if(props.status === "Waiting")
    {
        
        return <StartApp/>;
        
    }
    else if(props.status === "In Session")
    {

        return <Prescription/>;
    
    }
    else
    {
        return <Complete/>;
    }
}
export default buttonSelect;