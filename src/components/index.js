import "../components/style_header.css";
import { useState } from "react"
import { Link } from "react-router-dom";
import linkdin from "../components/img/in.png";
import git from "../components/img/git.png";
import face from "../components/img/face.png";
import insta from "../components/img/insta.png";
import logo from "../components/img/logo.png";


function Header (){

    const [active, setMode] = useState (false);
    const toggleMenu = () => {setMode(!active);}
    
    return (
        <header className="header">
            <img className="logo" src={logo}></img>
            <nav className={active? "nav active" : "nav"}>
                <button onClick={toggleMenu} className="btn-mobile">Menu <div className="hamburger"></div></button>
            <ul className="menu">
            <li><Link className="a">Home</Link></li>
            <li><Link className="a">About</Link></li>
            <li><Link className="a">Portfolio</Link></li>
            <li><Link className="a">Contact</Link></li>
            <ul className="social">
                <li><img src={linkdin}/></li> 
                <li><img src={git}/></li> 
                <li><img src={face}/></li> 
                <li><img src={insta}/></li> 
            </ul>
            </ul>
            </nav>
        </header>
    )
}

export default Header;