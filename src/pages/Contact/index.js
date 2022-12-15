import Header from "../../components";
import "../Contact/contact.css";
import linkedin from "./img/linkedin.png";
import git from "./img/git.png";
import facebook from "./img/face.png";
import instagran from "./img/insta.png";

function Contact(){
    return(
        <div className="contents" id="contentsContacts">
        <Header/>
        <body className="body">
        <h1 className="tituloContact">Contact.</h1>
                <p className="frase">Get in touch with me via social media or email:<br/>fabianofregnani@hotmail.com</p>

            <nav className="navContact">
                <div className="logos">
                 <ul>
                    <a className="linkedin" href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank">
                        <li><img src={linkedin}></img></li><p className="pc">Linkedin</p>
                    </a>
                    <a className="git" href="https://github.com/fregnani123" target="_blank">
                        <li><img src={git}></img></li><p className="pc">Git</p>
                    </a>
                </ul>  
                <ul>  
                    <a className="facebook" href="https://www.facebook.com/fabiano.fregnani" target="_blank" >
                        <li><img src={facebook}></img></li><p className="pc">facebook</p>
                    </a>
                    <a className="instagran" href="https://www.instagram.com/fabiano_fregnani/" target="_blank">
                        <li><img src={instagran}></img></li><p className="pc">Instagran</p>
                    </a>
                 </ul>
                </div>
            </nav>
         </body>
         
         </div>
    )
}
export default Contact;