import React from "react";
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer'
import '../Styles/Team.css'
function Resources(){
    return(
        <>
            <NavBar/>
            <h1 className="member-text">Resources</h1>
            <div className="resource-button-holder">
                <a href="https://unity.com/download#how-get-started" target="_blank" className="resource-button one">Download Unity</a>
                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank" className="resource-button two">Download Visual Studio</a>
            </div>
            <div className="footer-holder">
                <Footer/>
            </div>
        </>
    );
}

export default Resources;