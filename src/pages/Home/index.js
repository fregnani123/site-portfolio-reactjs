import React from "react";
import Header from "../../components";
import bgImage from "../../components/img/fabianoBg.png";
import "../Home/home.css";
import Footer from "../../components/footer";
import printSite from "../Home/printSite.png";
import movimentacao from "../Home/movimentacao.png";
import nave from "../Home/nave.png";

function Home() {
    return (
        <div className="contentsHome">
            <Header />
            <div className="conteinerHome">
                <div className="r2Home">
                    <img className="fabianoHome" src={bgImage} />
                </div>
                <div className="r1Home">
                    <div className="titulo">
                        <h1 className="name">Fabiano Fregnani</h1>
                        <h2 className="conteudoHome
                    ">&lt;Coder.&gt;</h2>
                        <p className="fraseHome">
                        Front-end developer with core skills in #html, #css, #Js, #ReactJs.</p></div>
                </div>
            </div>
            <div className="previa">
                <span>
                    <h4>some of my latest projects</h4>
                   <ul className="portfolio" >
                    <a href="https://fregnani123.github.io/site/" target="_blank">
                        <li className="p">My portfolio website - ReactJS
                        <img className="printSite" src={printSite}/></li>
                    </a>
                    <a href="https://fregnani123.github.io/MovimentarNave/" target="_blank">
                        <li className="p">
Move with the keyboard A-W-S-D<img className="movimentacao" src={movimentacao}/></li>
                    </a>
                    <a href="https://fregnani123.github.io/Projeto_nave/" target="_blank">
                        <li className="p">spaceship animation<img className="nave" src={nave}/></li>
                    </a>
                   </ul> 
                </span>
            </div>

            <Footer />
        </div>)
}

export default Home;