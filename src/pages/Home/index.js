import React from "react";
import Header from "../../components";
import bgImage from "../../components/img/fabianoBg.png";
import "../Home/home.css";
import Footer from "../../components/footer";

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
                   

                
                </span>
            </div>

            <Footer />
        </div>)
}

export default Home;