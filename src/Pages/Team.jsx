import React from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import BrandonPhoto from "../Images/MemberPhotos/BrandonXu.jpg";
import RohithPhoto from "../Images/MemberPhotos/RohithMuthukumar.jpg";
import BhavanPhoto from "../Images/MemberPhotos/BhavanBalusu.jpg";
import KorenPhoto from "../Images/MemberPhotos/KorenGila.jpg";
import '../Styles/Team.css'
import Footer from '../Components/Footer'

function Team(){

    return(
        <div>
            <NavBar/>
            <div className="main-member-card-holder">
                <h1 className="member-text">Our Officer Team</h1>
                <div className="member-profile-holder">
                    <Card name="Brandon Xu" position = "Officer" img={BrandonPhoto}/>
                    <Card name="Rohith Muthukumar" position = "Officer" img={RohithPhoto}/>
                    <Card name="Bhavan Balusu" position="Officer" img={BhavanPhoto}/>
                    <Card name="Koren Gila" position="Officer" img={KorenPhoto}/>
                </div>
            </div>
            <div className="footer-holder">
                <Footer/>
            </div>
        </div>
    );

}

export default Team;