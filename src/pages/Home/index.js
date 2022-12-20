import React from "react";
import Header from "../../components";
import bgImage from "../../components/img/fabianoBg.png";
import "../Home/home.css";
import Footer from "../../components/footer";

function Home() {
    return (
           
            <div className="contents">
                <Header/>
                <div 
                className="conteudoHome">
              
                <div className="quadrado1">
                    <img className="bgImage" src={bgImage}/>
                </div>

                <div className="quadrado2">
                <h1 className="textQuadrado2">&lt;Coder&gt;</h1>
                <p>Front-end developer who writes clean and efficient code.
                </p>
                <div/>
                </div>
               
               <h1 className="textQuadrado3">Frond-end Developer</h1>
                </div>
                <Footer/>
            </div>
    )

}
export default Home;