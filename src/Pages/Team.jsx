import React from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import AaronPhoto from "../Images/MemberPhotos/AaronChan.jpg";
import AndrewPhoto from "../Images/MemberPhotos/AndrewLiu.jpg";
import HarshaPhoto from "../Images/MemberPhotos/HarshaMalaviya.jpg";
import PetrosPhoto from "../Images/MemberPhotos/PetrosMzikyan.jpg";
import '../Styles/Team.css'
import Footer from '../Components/Footer'

function Team(){

    return(
        <div>
            <NavBar/>
            <div className="main-member-card-holder">
                <h1 className="member-text">Our Officer Team</h1>
                <div className="member-profile-holder">
                    <Card name="Aaron Chan" position = "Officer" img={AaronPhoto}/>
                    <Card name="Andrew Liu" position = "Officer" img={AndrewPhoto}/>
                    <Card name="Harsha Malaviya" position="Officer" img={HarshaPhoto}/>
                    <Card name="Petros Mzikyan" position="Officer" img={PetrosPhoto}/>
                </div>
            </div>
            <div className="footer-holder">
                <Footer/>
            </div>
        </div>
    );

}

export default Team;