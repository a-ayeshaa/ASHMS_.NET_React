import { useState } from "react";
import Navbar from "./Navbar";
const Home=()=>{
    return(
        <div className="">
            <Navbar/>
            <div className="">
            <a className="text-green-700">This is the colorful home</a>            
            <button class="bg-sky-500/100 text-white rounded-lg m-3 p-2">button</button>
            </div>
        </div>
    )
}

export default Home;    