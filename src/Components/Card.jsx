import React from 'react';
import '../Styles/Team.css'

function Card(props){
    return (
        <div className="member-profile">
            <img className="member-photo"src={props.img}></img>
            <h1>{props.name}</h1>
            <h2>{props.position}</h2>
        </div>
    );
}

export default Card;