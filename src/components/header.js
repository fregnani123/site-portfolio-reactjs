import "../components/style_header.css";
import { useState } from "react"
import { Link } from "react-router-dom";
import logo from "../components/img/logo.png";
import whatsapp from "../components/img/whats.png";
import linkedin from "../components/img/linkedin.png"
import git from "../components/img/github.png"
import insta from "../components/img/instagran.png";


function Header() {
    const [active, setMode] = useState(false);
    const toggleMenu = () => { setMode(!active) };
    return (
        <header className="header">
            <img className="logoHeader" src={logo}></img>
            
            <nav className={active ? "nav active" : "nav"}>
                <button onClick={toggleMenu} className="btn-mobile">Menu <div className="hamburger"></div></button>
                <ul className="menu">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/About" className="link">About</Link></li>
                    <li><Link to="/Portfolio" className="link">Portfolio</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <li>
                        <ul className="externMobile">
            <a className="whatsap" href="https://api.whatsapp.com/send?phone=5548996607600" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={whatsapp}/></li>
            </a>
            <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={linkedin}/></li>
            </a>
            <a href="https://github.com/fregnani123" rel="noreferrer">
                <li><img className="imgWhats" src={git}/></li>
            </a>
            <a href="https://www.instagram.com/fabiano_fregnani/" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={insta}/></li>
            </a>
           </ul></li>
                </ul>
            </nav>

            <ul className="externContact">
            <a className="whatsap" href="https://api.whatsapp.com/send?phone=5548996607600" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={whatsapp}/></li>
            </a>
            <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={linkedin}/></li>
            </a>
            <a href="https://github.com/fregnani123" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={git}/></li>
            </a>
            <a href="https://www.instagram.com/fabiano_fregnani/" target="_blank" rel="noreferrer">
                <li><img className="imgWhats" src={insta}/></li>
            </a>
           </ul>
        </header>
    )
}

export default Header;