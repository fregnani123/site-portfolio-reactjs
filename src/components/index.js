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
    const toggleMenu = () => {setMode(!active)};

    const [contact, setClass] = useState (false);
    const toggleContact = () => {setClass(!contact);}

    return (
        <header className="header">
            <img className="logo" src={logo}></img>
            <nav className={active? "nav active" : "nav"}>

          <button onClick={toggleMenu} className="btn-mobile">Menu <div className="hamburger"></div></button>
            <ul className="menu">
            <li><Link className="a">Home</Link></li>
            <li><Link className="a">About</Link></li>
            <li><Link className="a">Portfolio</Link></li>
            <li><Link onClick={toggleContact} className="a">contact</Link></li>
            </ul>

            <ul className= {contact? "social contact":"social"}>
                <li className="linkedin"><a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank"><img src={linkdin}/></a></li> 
                <li className="git"><a href="https://github.com/fregnani123" target="_blank"><img src={git}/></a></li> 
                <li className="face"><a href="https://www.facebook.com/fabiano.fregnani" target="_blank"><img src={face}/></a></li> 
                <li className="insta"><a href="https://www.instagram.com/fabiano_fregnani/" target="_blank"><img src={insta}/></a></li> 
                <li><Link onClick={toggleContact}><div className="hamburgerExit"></div></Link></li>
                <li><h1 className="contactH1">contact</h1>
                <h2 className="pc">Get in touch with me via social media or email:
                fabianofregnani@hotmail.com</h2><ul className="contGrande">
                <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank">
                    <li><img className="linkedin1" src={linkdin}></img></li>
                </a>
                <a href="https://github.com/fregnani123" target="_blank">
                    <li><img className="git1" src={git}></img></li>
                </a>
                <a href="https://www.facebook.com/fabiano.fregnani" target="_blank">
                    <li><img className="face1" src={face}></img></li>
                </a>
                <a href="https://www.instagram.com/fabiano_fregnani/" target='_blank'>
                    <li><img className="insta1" src={insta}></img></li>
                </a>
                </ul></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header;