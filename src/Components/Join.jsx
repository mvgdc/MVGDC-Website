import React from "react";
import '../Styles/SubPages.css'
function Join() {
    return (
        <div className="join-holder">
            <div className="join-holder title">
                <h1>
                    Interested?&#160;
                </h1>
                <span className="join">{"Join MVGDC Today!"}</span>
            </div>
            <button>
                <a style={{color:"gray"}}href="https://docs.google.com/forms/d/1dvDJFr6Ds-1Jx9bVSrYZFMlXA7O7iBRAcM5izbR0kG4/viewform?edit_requested=true" target="_blank" >
                Sign up
                </a>
            </button>
        </div>
    );
}



export default Join;