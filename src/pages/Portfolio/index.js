import React from "react";
import Header from "../../components";
import "../Portfolio/portfolio.css";
import Footer from "../../components/footer";
import imgPortflio from "../Portfolio/Portfolio.png";


function Portfolio(){
    return(
        <div className="contentPortfolio">
          <div>
          <Header/>
<div className="quadroPortfolio">

    <div className="quadro1">
        <h1><img className="imgPortfolio" src={imgPortflio}/></h1>
    </div>

 <div>
    <ul className="quadro2">
        <li className="quadroLi">portfolio</li>
        <li className="quadroLi">portfolio</li>
        <li className="quadroLi">portfolio</li>
        
    </ul>
</div>
</div>
        </div> 
          <Footer/>
        </div>
    )
}
export default Portfolio;