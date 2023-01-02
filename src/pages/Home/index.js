import React from "react";
import Header from "../../components";
import bgImage from "../../components/img/fabianoBg.png";
import "../Home/home.css";
import Footer from "../../components/footer";
import printSite from "../Home/printSite.png";
import movimentacao from "../Home/movimentacao.png";
import nave from "../Home/converter.png";
import { Link } from "react-router-dom";

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
                    <h4 className="mylast"><Link className="mylast" to="/Portfolio">Some of my latest projects</Link></h4>
                    <ul className="portfolio" >
                        <a className="aHome" href="https://fregnani123.github.io/site/" target="_blank" rel="noreferrer">My portfolio website - ReactJS
                            <li className="p">
                                <img className="printSite" src={printSite} /></li>
                        </a>
                        <a className="aHome"  href="https://fregnani123.github.io/MovimentarNave/" target="_blank" rel="noreferrer">Move with the keyboard A-W-S-D
                            <li className="p">
                                <img className="movimentacao" src={movimentacao} /></li>
                        </a>
                        <a className="aHome"  href="https://fregnani123.github.io/Projeto_nave/" target="_blank" rel="noreferrer">Scurrency conversion
                            <li className="p"><img className="nave" src={nave} /></li>
                        </a>
                    </ul>
                </span>
            </div>
            <Footer />
        </div>)
}

export default Home;