import React from "react";
import Header from "../../components";
import "../About/about.css";
import fab1 from "../About/img/fab1.png";

function About() {
    return (
        <div>
            <Header/>
       <div className="contentsAbout">
        <h1>About</h1>
         <ul className="ulAbout">
            <li className="lifab1">
                <img className="fab1" src={fab1}/>
            </li>

            <li className="lifab2">
                <img className="fab2" src={fab1}/></li>
         </ul>
       </div>

        </div>
    )
}
export default About;