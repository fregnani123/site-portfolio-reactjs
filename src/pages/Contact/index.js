import Header from "../../components";
import "../Contact/contact.css";
import linkedin from "./img/linkedin.png";
import git from "./img/git.png";
import facebook from "./img/face.png";
import instagran from "./img/insta.png";

function Contact(){
    return(
        <div>
            <Header/>
        <div className="contentContacts">
        <body>
            <nav className="navContact">
                <h1 className="tituloContact">Contact</h1>
                <p className="frase">Get in touch with me via social media or email.</p>
                <ul className="logos">
                    <a className="linkedin" href="">
                        <li><img src={linkedin}></img></li><p className="pc">Linkedin</p>
                    </a>
                    <a className="git" href="">
                        <li><img src={git}></img></li><p className="pc">Git</p>
                    </a>
                </ul>  
                <ul className="logos">  
                    <a className="facebook" href="">
                        <li><img src={facebook}></img></li><p className="pc">facebook</p>
                    </a>
                    <a className="instagran" href="">
                        <li><img src={instagran}></img></li><p className="pc">Instagran</p>
                    </a>
                </ul>
              
            </nav>
            <div className="conteiner">
                <div className="quadrado-verde"></div>
                <div className="quadrado-azul"></div>
                <div className="quadrado-amarelo"></div>
                </div>
            <footer></footer>
         </body>
         </div>
        </div>
    )
}
export default Contact;