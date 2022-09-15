import React from 'react'
import NavBar from '../Components/NavBar'
import '../Styles/Home.css'
import Goals from '../Components/Goals'
import Info from '../Components/Info'
import Join from '../Components/Join'
import Questions from '../Components/Questions'
import Steps from '../Components/Steps'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div className="mainPage">
      <meta name="apple-mobile-web-app-status-bar-style" content="white"></meta>
      <NavBar />
      <div className="mainpanel">
        <div className="subpanel" >
          <h1><b>Monta Vista</b></h1>
          <h1><b><span>Game Development Club
          </span></b></h1>
          <h1 className = "meeting-holder">Meetings are every Wednesday in E202 </h1>
          <div className="button-panel">
            <a href="https://unity.com/download#how-get-started" target="_blank">
              <button className="button-one">
                Download Unity
              </button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9Ldq3j7LN2PVrBcEQ4YXU95CEwgJH29wGlp_KsIvhZfq7Ag/viewform?usp=sf_link" target="_blank">
              <button className="button-two">
                Join The Club
              </button>
            </a>
           
          </div>
        </div>
      </div>
      <Info />
      <Goals />
      <Join />
      <Steps />
      <Questions />
      <Footer/>
    </div >
  );
}

export default Home;