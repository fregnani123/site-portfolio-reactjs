import React from "react";
import Header from "../../components/header";
import bgImage from '../About/img/fabianoNovo.png';
import "../Home/home.css";
import Footer from "../../components/footer";
import printGestao from "../Home/gestaoLite.png";
import movimentacao from "../Home/cro.png";
import nave from "../Home/converter.png";
import { Link } from "react-router-dom";
import htmlImg from '../About/img/html.png';
import cssImg from '../About/img/css.png';
import jsImg from '../About/img/js.png';
import nodeImg from '../About/img/nodeBg.png';
import reactImg from '../About/img/react.png';
import typeImg from '../About/img/typescript.png';
import mongodbImg from '../About/img/mongodb.png';


function Home() {
    return (
        <div className="contentsHome">
            <div className="containerHome">
                <Header className='header' />
                <div className="r2Home">
                    <div className="divPerfil"><span className="spanPerfil"><img className="fabianoHome" src={bgImage}/></span></div>
                </div>
                <div className="r1Home">
                    <div className="titulo">
                        <h1 className="name">🄵🄰🄱🄸🄰🄽🄾 🄵🅁🄴🄶🄽🄰🄽🄸<br/><span className="conteudoHome">Fᴜʟʟ-Sᴛᴀᴄᴋ Dᴇᴠᴇʟᴏᴘᴇʀ</span>
                    </h1>
                        <ul className="fraseHome">
                            <li><img className="imgSkills" src={htmlImg}/></li>
                            <li><img className="imgSkills" src={cssImg}/></li>
                            <li><img className="imgSkills" src={jsImg}/></li>
                            <li><img className="imgSkills" src={nodeImg}/></li>
                            <li><img className="imgSkills" src={reactImg}/></li>
                            <li><img className="imgSkills" src={typeImg}/></li>
                            <li><img className="imgSkills" src={mongodbImg}/></li>
                        </ul></div>
                </div>
            </div>
            <div className="previa">
                <span>
                    <h4 className="mylast"><Link className="mylast" to="/Portfolio">Some of my latest projects</Link></h4>
                    <ul className="portfolio" >
                        <a className="aHome" href="https://projetogestolite.netlify.app/" target="_blank" rel="noreferrer">Projeto GestãoLite - Node-MongoDb-ReactJS
                            <li className="p">
                                <img className="printSite" src={printGestao} /></li>
                        </a>
                        <a className="aHome"  href="https://fregnani123.github.io/cronometro/" target="_blank" rel="noreferrer">Digital stopwatch - HTML-CSS-JS
                            <li className="p">
                                <img className="movimentacao" src={movimentacao} /></li>
                        </a>
                        <a className="aHome"  href="https://fregnani123.github.io/converterMoedas/" target="_blank" rel="noreferrer">Scurrency conversion - HTML-CSS-JS-API
                            <li className="p"><img className="nave" src={nave} /></li>
                        </a>
                    </ul>
                </span>
            </div>
            <Footer />
        </div>)
}

export default Home;