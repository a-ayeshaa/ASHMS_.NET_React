import Logout from "../AllUserComponents/Logout";

const Navbar = () => {
    return (
        <div style={{ padding: "10px" }}>
            <Logout />

            <fieldset >
                <a href="/patient/doctorlist"> Doctor List</a> ||
                <a href="/patient/testlist"> Test List</a> ||
                <a href="/patient/testcart"> Test Cart</a> ||
                <a href="/patient/transactions"> Orders </a> ||
                <a href="/patient/appointments"> Appointments </a> ||

            </fieldset>
        </div>
    )
}
export default Navbar;