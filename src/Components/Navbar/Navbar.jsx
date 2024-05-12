import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
// import Loginpage from "../Login/Login";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    };
    const removeNavbar = () => {
        setActive('navBar ');
    };
  
    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1> <MdTravelExplore className="icon"/>
                            Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists grid">
                        <li className="navItem">
                            <Link to="/" className="navLink">Accueil</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/news" className="navLink">Sites</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/about" className="navLink">A propos</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/contact" className="navLink">Contact</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/login" className="navLink">Connexion</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/register" className="navLink">Inscription</Link>
                        </li>
                        <button className="btn">
                            <a href="#">RESERVER</a>
                        </button>
                    </ul>
                    <div  onClick={removeNavbar} className="closeNavbar">
                        <IoMdCloseCircle className="icon" />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
