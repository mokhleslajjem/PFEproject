import React, { useState } from "react";
// import './Guide.css';
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import img from '../../asser/profil.jpg'
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
    Nav,
    Media,
  } from "reactstrap";
import { color } from "@mui/system";
// import Loginpage from "../Login/Login";

const Guide = () => {
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
                <>
                    <div className="logoDiv">
                        <a href="/" className="logo flex">
                            <h1> <MdTravelExplore className="icon"/>
                                Travel.</h1>
                        </a>
                    </div>
                
                    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                        <FormGroup className="mb-0">
                            <InputGroup className="input-group-alternative">
                                <ButtonGroup addonType="prepend">
                                    <InputGroupText>
                                        <i className="fas fa-search" />
                                    </InputGroupText>
                                </ButtonGroup>
                                <Input placeholder="Search" type="text" />
                            </InputGroup>
                        </FormGroup>
                    </Form>
                    <Nav className="align-items-center d-none d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <Link to="/profil/*">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img
                                            alt="..."
                                            src={require("../../asser/team-4-800x800.jpg")}
                                            />
                                        </span>
                                    </Link>
                                    <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold">
                                        Mokhles Lajjem
                                        </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0">Bienvenue!</h6>
                                </DropdownItem>
                                <DropdownItem to="/profil/*" tag={Link}>
                                    <i className="ni ni-single-02" />
                                    <span>Acceuil</span>
                                </DropdownItem>
                                <DropdownItem to="/client" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Mon Profil</span>
                                </DropdownItem>
                                <DropdownItem to="/client/visites" tag={Link}>
                                    <i className="ni ni-calendar-grid-58" />
                                    <span>Avis</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-settings-gear-65" />
                                    <span>Paramètres</span>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <i className="ni ni-user-run" />
                                    <span>Déconnexion</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </>
  

            </header>

            <h3>Bienvenue Mokhles !</h3>
        </section>

        
    );
};

export default Guide;
