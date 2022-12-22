import React from "react";
import Header from "../../components";
import "../Portfolio/portfolio.css";
import Footer from "../../components/footer";
import imgPortflio from "../Portfolio/Portfolio.png";
import sitePortfolio from "../Portfolio/img/printSite.png"
import movimentacao from "../Portfolio/img/movimentacao.png";
import animacao from "../Portfolio/img/nave.png"
import calculator from "../Portfolio/img/calculadora.png";
import MenuMobile from "../Portfolio/img/menuMobile.png";
import login from "../Portfolio/img/paginaLogin.png";
import gitProjetos from "../Portfolio/img/git.png";
import barbecue from "../Portfolio/img/churrasco.png";
import capitura from "../Portfolio/img/capitura.png";



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
        <a className="aPortfolio" href="https://fregnani123.github.io/site/" target="_blank">My portfolio website - ReactJS
            <li className="quadroLi"><img className="sitePortfolio" src={sitePortfolio}/></li>
        </a>
        <a className="aPortfolio" href="https://fregnani123.github.io/MovimentarNave/" target="_blank">Move with the keyboard A-W-S-D
            <li className="quadroLi"><img className="sitePortfolio" src={movimentacao}/></li>
        </a>
        <a className="aPortfolio" href="https://fregnani123.github.io/Projeto_nave/" target="_blank">Animation in HTML-CSS
            <li className="quadroLi"><img className="sitePortfolio" src={animacao} /></li>
        </a>
    </ul>
    <ul className="quadro2">
        <a className="aPortfolio" href="https://fregnani123.github.io/Estudos_JavaJS_Calculadora/" target="_blank">Calculator - HTML-CSS-JS
            <li className="quadroLi"><img className="sitePortfolio" src={calculator}/></li>
        </a>
        <a className="aPortfolio" href="https://fregnani123.github.io/Aprendendo-menu-hamburguer/" target="_blank">Menu-Mobile JS-CSS
            <li className="quadroLi"><img className="sitePortfolio" src={MenuMobile}/></li>
        </a>
        <a className="aPortfolio" href="https://fregnani123.github.io/Portifolio-firebase-login/" target="_blank">Pagina Login - HTML-CSS-JS-Firibase
            <li className="quadroLi"><img className="sitePortfolio" src={login}/></li>
        </a>
        
    </ul>
    <ul className="quadro2">
    <a className="aPortfolio" href="https://fregnani123.github.io/pagina-capitura/" target="_blank">Capture page - HTML-CSS-JS
            <li className="quadroLi"><img className="sitePortfolio" src={capitura}/></li>
        </a>
    <a className="aPortfolio" href="https://fregnani123.github.io/Churrascometro-site/" target="_blank">Barbecue preview - HTML-CSS-JS
            <li className="quadroLi"><img className="sitePortfolio" src={barbecue}/></li>
        </a>
    <a className="aPortfolio" href="https://github.com/fregnani123" target="_blank">access more projects on Git.
            <li className="quadroLi"><img className="sitePortfolio" src={gitProjetos}/></li>
        </a>
    </ul>
</div>
</div>
        </div> 
          <Footer/>
        </div>
    )
}
export default Portfolio;