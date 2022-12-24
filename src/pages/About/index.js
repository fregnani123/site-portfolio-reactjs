import React from "react";
import Header from "../../components";
import "../About/about.css";
import fundo from "../About/img/fabiano.png";
import engrenagens from "../About/img/Engrenagens.m4v";
import imgAbout from "../About/img/about.jpg";
import gif from "../About/img/gifs.gif";




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
            </li>
            <li className="lifabiano">
                
            </li>
            
         </ul>a
       </div>

        </div>
    )
}
export default About;