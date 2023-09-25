import React from "react";

function Footer(){
    return(
        <>
            <div className="footer-temp" style={{ display: "flex", flexDirection: "row", color: "rgb(109, 107, 107)", marginTop: "40px" }}>
                <div style={{ width: "50%", paddingLeft: "10px" }}>
                &copy; 2022 MVGDC
                </div>
                <div style={{ width: "50%", textAlign: "right", paddingRight: "10px" }}>
                Designed by Babun
                </div>
            </div>
        </>
    );
}

export default Footer;