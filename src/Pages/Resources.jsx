import React from "react";
import NavBar from "../Components/NavBar";
import Footer from '../Components/Footer'
import '../Styles/Team.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Resources() {
    return (
        <>
            <NavBar />
            <div className="resource-subpanel" >
                <h1><b>Resources</b></h1>
            </div>
            <div className="resource-button-holder">
                <a href="https://unity.com/download#how-get-started" target="_blank" className="resource-button one"> 
                    <div className="icon-holder-r">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi-unity" viewBox="0 0 16 16">
                            <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8L15 11.2Z"/>
                        </svg>   
                    </div> 
                    
                    <div className="breif-des">
                        <h2>Download Unity</h2>
                        <h4>
                            A cross-platform game engine, that is used to develop games and experiences in both 2D and 3D. 
                        </h4>

                    </div>
                </a>
                <a href="https://visualstudio.microsoft.com/downloads/" target="_blank" className="resource-button two">
                
               
                
                    <div className="icon-holder-g">
                        <svg fill="white" width="27" height="27" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
                        </svg>
                    </div> 
                        
                    <div className="breif-des">
                        <h2>Download Visual Studio</h2>
                        <h4>An integrated development environment used to develop video games, websites, web apps, and mobile apps.</h4>
                    </div>
                </a>
        
                <a href="https://www.piskelapp.com/download" target="_blank" className="resource-button 
                three">
                    <div className="icon-holder-p">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi   bi-easel2-fill" viewBox="0 0 16 16">
                            <path d="M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809L8.447.276Z"/>
                            <path fill-rule="evenodd" d="M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1H.5Zm3.64 2 .25-1h7.22l.25 1H4.14Z"/>
                        </svg>
                    </div> 
                        
                    <div className="breif-des">
                        <h2>Download Piskel App</h2>
                        <h4>A free sprite editor used for Spriting and Pixel art. A tool used to create pixel art, game sprites and GIFs.</h4>
                    </div>
            
                </a>
            

            </div>
             <div className="footer-holder">
                <Footer />
            </div>
        </>
    );
}

export default Resources;