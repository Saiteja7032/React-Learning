import { LOGO_IMG } from "../utils/constants";
const Logo = () => (
    <img className="logo" src={LOGO_IMG} alt="logo"/>
)
const NavItems = () => {
    return (
    <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
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