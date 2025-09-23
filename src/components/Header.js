import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";  
//Link is used to navigate to different pages without reloading the page.
//In anchor tag, when we click on any link, it reloads the page.
//But in SPA(Single Page Application), we don't want to reload the page.
//So, we use Link component from react-router-dom. 
const Logo = () => (
    <img className="logo" src={LOGO_IMG} alt="logo"/>
)
const NavItems = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
    <ul className="nav-items">
        <li>
          <Link to={"/"}>Home</Link></li>
        <li>
            <Link to={"/about"}>About Us</Link></li>
        <li>
            <Link to={"/contact"}>Contact</Link></li>
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