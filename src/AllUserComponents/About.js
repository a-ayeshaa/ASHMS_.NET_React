import { useState } from "react";
import Navbar from "./Navbar";
const About=()=>{
    return(
        <fieldset>
            <Navbar/>
            <a className="text-green-700">This is the colorful About</a>            
            <button class="bg-sky-500/100 text-white rounded-lg m-3 p-2">button</button>
        </fieldset>
    )
}

export default About;