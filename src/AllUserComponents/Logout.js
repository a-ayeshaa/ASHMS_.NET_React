import axiosConfig from './axiosConfig';
const Logout = () => {
    const logout = () => {
        axiosConfig.get("/logout").then
            ((rsp) => {
                debugger;
                window.location.href = "/login";
            }, (error) => {
                debugger
            })
    }
    return (
        <div>
            <button onClick={()=>{logout();}} value={"LOGOUT"}>LOGOUT</button>
        </div>
    )
}

export default Logout;