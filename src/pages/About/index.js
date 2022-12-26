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
import iconSkill from "../About/img/skill.jpg";


function About() {
    return (
        <div className="principal">
        <video className="engrenagens" src={engrenagens} autoPlay loop muted type="mp4"/>

       <Header/>
       <body>
         <ul className="ulAbout">
           <li className="liAbout">
                 <p className="pAbout"><img className="gif" src={gif}/><img className="imgAbout" src={imgAbout}/></p>
                 <img className="fabi" src={fundo}/>
                 <p className="ptext">Hello, I'm Fabiano Fregnani, I'm from the south of Brazil, I'm looking for new opportunities in the development area. Access my <a href="https://www.linkedin.com/in/fabiano-fregnani-8984051a7/">Linkedin.</a></p>
            </li>
            <li className="liRoxo">
              <h3>Front-End development</h3>
              <ul className="gifUl">
              <li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconSkill}/></li>
              <li><img className="iconFerramentas" src={gif}/></li>
            </ul>
            <ul className="gifUl">
              <li><img className="iconFerramentas" src={iconHtml}/></li>
              <li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconCss}/></li>
              </ul>
              <ul className="gifUl">
              <li><img className="iconFerramentas" src={iconJs}/></li><li><img className="iconFerramentas" src={gif}/></li>
              <li><img className="iconFerramentas" src={iconReact}/></li>
            </ul>
            </li>
         </ul> 
         </body>
         <footer><p className="copy">© 2023 Fabiano Fregnani - Front-End Developer.</p> </footer>
       </div>
    )
}
export default About;