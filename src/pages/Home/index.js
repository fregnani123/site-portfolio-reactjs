import React from "react";
import Header from "../../components";
import bgVideo from "../Home/bgVideo.m4v"
import "../Home/home.css"
import f1 from "../Home/f1.png"
import f2 from "../Home/f2.png"


function Home() {
    return (
        <div className="contents">
            <video className="bgVideo" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <Header />
            <h1 className="dev"><p className="fabiano"><img className="f1" src={f1}></img>abiano Fregnani</p>Front-End Developer</h1>
        </div>
    )

}
export default Home;