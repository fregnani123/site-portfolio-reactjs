import React from "react";
import Header from "../../components";
import "../../pages/Contact/contact.css"
import fabiano from "../../components/img/fabiano.png"
import Footer from "../../components/footer";
import Linkedin from "../Contact/img/linkedin.png";
import git from "../Contact/img/Git.png"
import facebook from "../Contact/img/face.png"
import Instagran from "../Contact/img/insta.png"


function Contact(){
    return (
           <div className="contentsContacts">
            <Header/>
            <div className="conteiner">

                <div className="r1">  

                <div className="titulo">

                <h1 className="contact
            ">Contact.</h1>
                    <p className="frase">Get in touch with me via social media or email.</p></div>
                 <ul className="m1">
                    <a className="linkedin" href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/" target="_blank">
                        <li className="liMidia"><img className="imgMidia" src={Linkedin}/>Linkedin</li>
                    </a>
                    <a className="git" href="https://github.com/settings/profile" target="_blank">
                        <li className="liMidia"><img className="imgMidia" src={git}/>Git</li>
                    </a>
                 </ul>
                 <ul className="m2">
                 <a className="instagran" href="https://www.instagram.com/fabiano_fregnani/" target="_blank">
                        <li className="liMidia"><img className="imgMidia" src={Instagran}/>Instagran</li>
                    </a>
                    <a className="facebook" href="https://www.facebook.com/fabiano.fregnani/" target="_blank">
                        <li className="liMidia"><img className="imgMidia" src={facebook}/>facebook</li>
                    </a>
                    </ul>
                </div>
                <div className="r2">
                 <img className="fabiano" src={fabiano} />
                </div>
            </div> 
            <div className="email">
                <div>
                <h1 className="send">Send me an email</h1>
                <p className="nameInput">Name</p>
               <input></input>
               <p>Email</p>
               <input></input>
               </div>
             <span className="span2">
               <p className="message">Message
               </p>
               <textarea className="textarea"
               rows="10" cols="50">
               </textarea> 
               <p className="btnEmail"><input className="btnEmail" type="submit"></input></p>
             </span>
              </div>

            <Footer/>
           </div>)
}

export default Contact;