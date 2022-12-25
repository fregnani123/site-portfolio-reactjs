import React from "react";
import Header from "../../components";
import "../About/about.css";
import fundo from "../About/img/fabiano.png";
import engrenagens from "../About/img/Engrenagens.m4v";
import imgAbout from "../About/img/about.jpg";
import gif from "../About/img/gifs.gif";
import Footer from "../../components/footer";
import iconHtml from "../About/img/html.png";
import iconCss from "../About/img/css.png";
import iconJs from "../About/img/js.png";
import iconReact from "../About/img/react.png";


function About() {
    return (
        <div className="principal">
        <video className="engrenagens" src={engrenagens} autoPlay loop muted type="mp4"/>
       <div className="contentsAbout">
       <Header/>
         <ul className="ulAbout">
           <li className="liAbout">
                 <p className="pAbout"><img className="gif" src={gif}/><img className="imgAbout" src={imgAbout}/></p>
                 <img className="fabi" src={fundo}/>
                 <p className="ptext">Hello, I'm Fabiano Fregnani, I'm from the south of Brazil, I'm looking for new opportunities in the development area. Access my <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/">Linkedin.</a></p>
            </li>
            <li className="liRoxo">
            <p><img className="gif2" src={gif}/></p>
            <ul>
              <li><img className="iconFerramentas" src={iconHtml}/></li>
              <li><img className="iconFerramentas" src={iconCss}/></li>
              <li className="frontEnd">Front-End development</li>
              <li><img className="iconFerramentas" src={iconJs}/></li>
              <li><img className="iconFerramentas" src={iconReact}/></li>
            </ul>
            </li>
            
         </ul>
         <Footer/>
       </div>
        </div>
    )
}
export default About;