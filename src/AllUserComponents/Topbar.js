import Url from "./Url"
const Topbar = () => {
    return (
        <div>
            <center>
                <fieldset style={{ margin: "15px" }}>
                    <Url link={"/login"} name="Login" />
                </fieldset>
            </center>
        </div>
    )
}

export default Topbar;