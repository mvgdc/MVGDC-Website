import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Link,
} from "react-router-dom";
import { MdClose} from "react-icons/md"
import burger from '../Images/burger.png'
import '../Styles/NavBar.css'


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    };

    const closeMenu = () => {
        setNavbarOpen(false);
    };

    const closeMenuBar = () => {
        let width = document.querySelector('.nav').offsetWidth;

        if (width >= 900) {
            setNavbarOpen(false);
        }

    };
    window.addEventListener('resize', closeMenuBar)

    return (
        <><div className={nav ? 'nav active' : 'nav'}>

            <div className="bar">
                <div className="logo-holder">
                        <div className='logo'>
                            <Link to="/"><div className="logos"></div></Link>
                        </div>
                </div>
                <div className="button-holder">
                <Link className="button" to='/'>
                        {/* <i class="bi bi-people">{" "}</i> */}
                        Home
                    </Link>
                    <Link className="button" to='/team'>
                        {/* <i class="bi bi-people">{" "}</i> */}
                        Team
                    </Link>
                    <a className="button" href="https://discord.gg/ChnPDW5bzx" target="_blank">
                        {/* <i class="bi bi-discord"></i>  */}
                        Discord
                    </a>
                    <Link className="button" to="/resources">
                        Resources
                    </Link>
                    <a className="button-special" href="https://docs.google.com/forms/d/e/1FAIpQLSd9Ldq3j7LN2PVrBcEQ4YXU95CEwgJH29wGlp_KsIvhZfq7Ag/viewform?usp=sf_link" target="_blank">
                        Join
                    </a>
                    <button onClick={handleToggle} className="hamburger">
                        <img src={burger} />
                    </button>
                </div>
                <div className={`menuNav ${navbarOpen ? " showMenu" : " closeMenu"}`}>
                    <div className='menu-title'>
                        <div className='title-holder-holder'>
                            <div className="title-holder"></div>
                        </div>
                        <MdClose className="close-button" onClick={handleToggle} style={{ color: "gray", width: "30px", height: "30px" }} />
                    </div>
                    <div className='menuButt-holder'>
                        <Link className="menu-button" to='/' onClick={closeMenu}>
                            <i class="nav bi bi-house-door-fill"></i>Home
                        </Link>
                        <Link className="menu-button" onClick={closeMenu} to='/team'>
                            <i class="nav bi bi-people"></i>Team
                        </Link>
                        <a className="menu-button" onClick={closeMenu} href="https://discord.gg/ChnPDW5bzx" target="_blank">
                            <i class="nav bi bi-discord"></i> Discord
                        </a>
                        <Link className="menu-button" onClick={closeMenu} to='/resources'>
                            <i class="nav bi bi-file-earmark"></i>Resources
                        </Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9Ldq3j7LN2PVrBcEQ4YXU95CEwgJH29wGlp_KsIvhZfq7Ag/viewform?usp=sf_link" target="_blank">
                            <button className="menus-button special" onClick={closeMenu}>
                                Join
                            </button>
                        </a>

                    </div>
                </div>
            </div>

        </div >
        </>

    );
}

export default NavBar;