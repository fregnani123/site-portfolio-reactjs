import React from "react";
import Header from "../../components";
import "../About/about.css";
import fab1 from "../About/img/fabiano.png";
import imgAbout from "../About/img/about.png";
import fundo from "../About/img/fundoNovo.png";



function About() {
    return (
        <div className="principal">
        <Header/>
        
       <div className="contentsAbout">
         <ul className="ulAbout">
           <li className="liAbout">
                <img className="ImgAbout" src={imgAbout}/>
            </li>
            <li className="lifabi">
              
                <img className="fabi" src={fundo}/>
            </li>
            
         </ul>
       </div>

        </div>
    )
}
export default About;