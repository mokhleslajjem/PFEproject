import React, { useState } from "react";
import './Client.css';
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import img from '../../asser/profil.jpg'
import sousse from '../../asser/sousse.jpg'
import djerba from '../../asser/djerba.jpg'
import images from '../../asser/images.jpg'
import profil1 from '../../asser/profil1.png'

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
    InputGroupAddon,
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
                                            src={profil1}
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
                                    <span>Mon Profil</span>
                                </DropdownItem>
                                <DropdownItem to="/client" tag={Link}>
                                    <i className="ni ni-support-16" />
                                    <span>Guides</span>
                                </DropdownItem>
                                <DropdownItem to="/client/visites" tag={Link}>
                                    <i className="ni ni-calendar-grid-58" />
                                    <span>Visites</span>
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

                {/* <section id="destinations">
                    <div className="section_title">
                        <h3>Destinations</h3> 
                    </div>
                    <div class="container tt_desktop">
                        <div class="row">
                            <div class="text-white pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="card-img tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-74090301-1514891148.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TUNIS</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            <div class="Card-img-overlay overlay">
                                <p class="Card-text">
                                    <b class="card-title-inner">Tunis et les Cotes de Carthage</b>
                                    <br></br>
                                    "Tunis et sa Média, Carthage, Sidi Bou Said sont des lieux chargés d'histoire mais aussi bouillonnan... "
                                </p>    

                                    

                                

                            </div>

                        </div>



                    </div>


                </section> */}
  

            </header>
            <section class="destinations" id="destinations">
                    <div class="section_title">
                        <h3>Destinations</h3> 
                    </div>
                    <div class="container tt_desktop">
                        <div class="row">
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-74090301-1514891148.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TUNIS</h2>
                                        </div>
                                    
                                </a>
                                {/* <div class="card-img-overlay overlay">
                                    <p class="card-text">
                                        <b class="card-title-inner">Tunis et les Cotes de Cartage</b>
                                        
                                        "Tunis et sa Média, Carthage, Sidi Bou Said sont des lieux chargés d'histoire mais aussi bouillonnan... "
                                    </p>
                                </div> */}

                            </div>
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tabarka et Ain draham"
                            short_name="TABARKA">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-33609503-1562523804.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TABARKA</h2>
                                        </div>
                                    
                                </a>
                                {/* <div class="card-img-overlay overlay">
                                    <p class="card-text">
                                        <b class="card-title-inner">Tabarka et Ain draham</b>
                                        
                                        "Tabarka ou Aïn Draham ? Mer ou forêt ? Les deux vous attendent dans le Nord-Ouest tunisien. Un parad... "                                  </p>
                                </div> */}

                            </div>
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Hammamet et le Cap Bon"
                            short_name="HAMMAMET">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-53544624-1562523579.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">HAMMAMET</h2>
                                        </div>
                                    
                                </a>
                                {/* <div class="card-img-overlay overlay">
                                    <p class="card-text">
                                        <b class="card-title-inner">Hammamet et le Cap Bon</b>
                                        "Des magnifiques plages, de beaux hôtels, des activités sportives et des night-clubs au bord de la me... "        </p>      
                                                           
                                </div> */}


                            </div>
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="tn mx-auto image d-block" src={sousse} alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">SOUSSE</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="tn mx-auto image d-block" src={djerba} alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">DJERBA</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            <div class="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class=" tn mx-auto image d-block" src={images} alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">SAHARA</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            {/* <div class="text-white pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="card-img tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-33609503-1562523804.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TABARKA</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            <div class="text-white pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="card-img tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-33609503-1562523804.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TABARKA</h2>
                                        </div>
                                    
                                </a>

                            </div>
                            <div class="text-white pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" full_name="Tunis et les Cotes de Carthage"
                            short_name="TUNIS">
                                <a href="http://tunisiatourism.info/fr/destination/tunis">
                                    <img class="card-img tn mx-auto image d-block" src="http://tunisiatourism.info/thumbs/393-250-destinations-33609503-1562523804.jpg" alt="Card image"  />
                                        <div class="card-img-overlay">
                                            <h2 class="Card-title full_name_dest">TABARKA</h2>
                                        </div>
                                    
                                </a>

                            </div>
                             */}
                                    

                                

                           

                        </div>



                    </div>


                </section>
        </section>

        
    );
};

export default Client;

