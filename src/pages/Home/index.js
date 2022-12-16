import React from "react";
import Header from "../../components";
import bgVideo from "../Home/bgVideo.m4v"
import "../Home/home.css"




function Home() {
    return (
        <div className="contents">
            <video className="bgVideo" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <Header />
            <h1 className="dev"><p className="fabianoHome">Fabiano Fregnani</p>Front-End Developer</h1>
        </div>
    )

}
export default Home;