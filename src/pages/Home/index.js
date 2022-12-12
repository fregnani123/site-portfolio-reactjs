import React from "react";
import Header from "../../components";
import bgVideo from "../Home/bgVideo.m4v"
import "../Home/home.css"

function Home() {
    return (
        <div>
            <video className="bgVideo" autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
            </video>
            <Header />
        </div>
    )

}
export default Home;