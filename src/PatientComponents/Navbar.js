const Navbar=()=>
{
    return(
        <div style={{padding:"10px"}}>
            <fieldset >
                <a href="/patient/doctorlist"> Doctor List</a> ||
                <a href="/patient/testlist"> Test List</a> || 
                <a href="/patient/testcart"> Test Cart</a> || 
                <a href="/patient/transactions"> Orders </a> || 

            </fieldset>
        </div>
    )
}
export default Navbar;