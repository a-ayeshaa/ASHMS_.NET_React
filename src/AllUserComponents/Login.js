import { useEffect, useState } from "react";
import axiosConfig from "./axiosConfig";
import Topbar from "./Topbar";

const Login = () => {
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [errs, setErrs] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        const data = { username: username, password: password };
        debugger;
        axiosConfig.post("/login", data).
            then((succ) => {
                debugger
                var token = succ.data.token;
                localStorage.setItem("_authToken", token);
                debugger;
                axiosConfig.get(`users/${succ.data.User_Id}`)
                    .then((rsp) => {
                        debugger;
                        if (rsp.data.Role === "Patient") {
                            window.location.href = "/patient/doctorlist";
                        }

                        else if (rsp.data.Role === "Doctor") {
                            window.location.href = "/doctor/appointments";
                        }
                    }, (error) => {
                        debugger;
                    }
                    )
            }, (erros) => {
                setErrs(erros.response.data);
                console.log(errs);
                debugger;
            })
    }
    return (
        <div>
            <Topbar />
            <center>
                <br />
                <fieldset style={{ width: "50%" }}>
                    <br />
                    <center>
                        <form onSubmit={handleLogin}>
                            Username: <input onChange={(e) => { SetUsername(e.target.value) }} size={30} type="text" name="username" value={username} /> <br />
                            <span>{errs.Username ? errs.Username[0] : ''}</span><br />
                            Password: <input onChange={(e) => { SetPassword(e.target.value) }} type="password" name="password" value={password} /> <br />
                            <span>{errs.Password ? errs.Password[0] : ''}</span><br />
                            <input type="submit" value="Login" />

                        </form>
                    </center>
                </fieldset>
                <span style={{color:"red"}}>
                    {errs}
                </span>
                <br /><br />
                <a href="/forgotpassword">FORGOT PASSWORD ?</a>
            </center>
        </div>
    )
}

export default Login;