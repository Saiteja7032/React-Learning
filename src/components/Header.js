import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
const Logo = () => (
    <img className="logo" src={LOGO_IMG} alt="logo"/>
)
const NavItems = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
    <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="login-button"
        onClick={()=>{
        btnName==="Login" ?  setBtnName("Logout") : setBtnName("Login")
        }}>
            {btnName}
        </button>
    </ul>
    )
}
const Header = () => {
return (
    <div className="header">
        <Logo/>
        <NavItems/>
    </div>
)
}

export default Header;