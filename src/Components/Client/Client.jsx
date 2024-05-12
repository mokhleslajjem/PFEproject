import React, { useState } from "react";
import './Client.css';
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import img from '../../asser/profil.jpg'
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    ButtonGroup,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media,
  } from "reactstrap";
// import Loginpage from "../Login/Login";

const Client = () => {
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

                     
  
                <div className="search-bar">
                
                  <h5> <CiSearch className="icon"/></h5>
                   <input type="text"  placeholder="Search"  />
                   

                </div>

                <div className={active}>
                    <ul className="navLists grid">
                        <li className="navItem">
                            <Link to="/" className="navLink">Guides</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/news" className="navLink">Visites</Link>
                        </li>
                    </ul> 
                </div>  

                <Nav className="align-items-center d-none d-md-flex" navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle className="pr-0" nav>
                            <Media className="align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                                <img
                                alt="..."
                                src={require("../../asser/profil.jpg")}
                                />
                            </span>
                            <Media className="ml-2 d-none d-lg-block">
                                <span className="mb-0 text-sm font-weight-bold">
                                Mokhles Lajjem
                                </span>
                            </Media>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem className="noti-title" header tag="div">
                            <h6 className="text-overflow m-0">Welcome!</h6>
                            </DropdownItem>
                            <DropdownItem to="/profil/*" tag={Link}>
                            <i className="ni ni-single-02" />
                            <CgProfile className="icon" />
                            <span>Mon Profil</span>
                            </DropdownItem>
                            <DropdownItem to="/client" tag={Link}>
                            <i className="ni ni-support-16" />
                            <span>Sites</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                            <i className="ni ni-calendar-grid-58" />
                            <span>Visites</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                            <i className="ni ni-settings-gear-65" />
                            <IoMdSettings className="icon" />
                            <span>Paramètres</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i className="ni ni-user-run" />
                            <TbLogout className="icon" />
                            <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>

            </header>
        </section>

        
    );
};

export default Client;
