import React from "react";
import NavBar from "../Components/NavBar";
import Card from "../Components/Card";
import AaronPhoto from "../Images/MemberPhotos/AaronChan.jpeg";
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
                    <Card name="Aaron Chan" position = "President" img={AaronPhoto}/>
                    <Card name="Andrew Liu" position = "Vice President" img={AndrewPhoto}/>
                    <Card name="Harsha Malaviya" position = "Vice President" img={HarshaPhoto}/>
                    <Card name="Petros Mzikyan" position="Secretary" img={PetrosPhoto}/>
                </div>
            </div>
            <div className="footer-holder">
                <Footer/>
            </div>
        </div>
    );

}

export default Team; 