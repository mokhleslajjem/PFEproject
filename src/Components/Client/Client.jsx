import React, { useEffect, useState } from "react";
import './Client.css';
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";


import { getSitesArcheologiques } from '../../api';
// import { IoMdCloseCircle } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import img from '../../asser/profil.jpg'
// import sousse from '../../asser/sousse.jpg'
// import djerba from '../../asser/djerba.jpg'
// import images from '../../asser/images.jpg'
import profil1 from '../../asser/profil1.png'

// import { CgProfile } from "react-icons/cg";
// import { IoMdSettings } from "react-icons/io";
// import { TbLogout } from "react-icons/tb";
// import { CiSearch } from "react-icons/ci';


import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupText,
    Input,
    InputGroup,
    Nav,
    Media,
  } from "reactstrap";
// import Loginpage from "../Login/Login";


const Client = () => {
  



    const [active, setActive] = useState('navBar');
    const [sites, setSites] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [userName, setUserName] = useState('');


    // const userName = localStorage.getItem('userName'); // Récupérer le nom de l'utilisateur depuis le localStorage
    // console.log("Nom de l'utilisateur récupéré: ", userName); // Ajouter cette ligne pour déboguer

    
        useEffect(() => {
                // Récupérer le nom de l'utilisateur depuis le localStorage
        const storedUserName = localStorage.getItem('userName');
        setUserName(storedUserName);

            const fetchSites = async () => {
                try {
                    const data = await getSitesArcheologiques();
                    if (Array.isArray(data)) {
                        setSites(data);
                    } else {
                        setError('Data is not an array');
                    }
                } catch (error) {
                    setError('Error fetching sites');
                } finally {
                    setLoading(false);
                }
            };
    
            fetchSites();
        }, []);
    
        if (loading) {
            return <p>Loading...</p>;
        }
    
        if (error) {
            return <p>{error}</p>;
        }


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
                                <InputGroupText>
                                    <i className="fas fa-search" />
                                </InputGroupText>
                                <Input placeholder="Search" type="text" />
                            </InputGroup>
                        </FormGroup>
                    </Form>
                    <Nav className="align-items-center d-none d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img
                                        alt="..."
                                        src={profil1}
                                        />
                                    </span>
                                    <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold" >
                                        {userName}
                                        </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" end>
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

            </header>
            <section className="destinations" id="destinations">
                <div className="section_title">
                    <h3>Destinations</h3>
                </div>
                <div className="container tt_desktop">
                    <div className="row">
                        {sites.map((site) => (
                            <div className="text-white p-0 pad_0 pic_container col-sm-4 animated fadeInLeft the_hover_act" key={site.id}>
                                <Link to={`http://tunisiatourism.info/fr/destination/${site.nom.toLowerCase()}`}>
                                <img className="tn mx-auto image d-block" src={site.image} alt="Card image" />
                                <div className="card-img-overlay">
                                        <h2 className="Card-title full_name_dest">{site.nom.toUpperCase()}</h2>
                                    </div>
                                </Link>
                                {/* <span className="continent flex">
                                
                                    <span className="name">{site.localisation.toUpperCase()}</span>
                                </span> */}
         
                                {/* <div className="desc">
                                     <p>{site.description.toUpperCase()}</p>
                                </div> */}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Client;
