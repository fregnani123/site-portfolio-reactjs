import "../components/style_header.css";
import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../components/img/logo.png";

function Header() {

    const [active, setMode] = useState(false);
    const toggleMenu = () => { setMode(!active) };

    return (
        <header className="header">
            <img className="logoHeader" src={logo}></img>
            <nav className={active ? "nav active" : "nav"}>

                <button onClick={toggleMenu} className="btn-mobile">Menu <div className="hamburger"></div></button>
                <ul className="menu">
                    <li><Link to="/site" className="link">Home</Link></li>
                    <li><Link to="/About" className="link">About</Link></li>
                    <li><Link to="/Portfolio" className="link">Portfolio</Link></li>
                    <li><Link to="/contact" className="link">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;