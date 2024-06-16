import React, { useState } from "react";
import './reservation.css'
import { Link } from 'react-router-dom'; // Import Link instead of Router
import { MdTravelExplore } from "react-icons/md";
import profil1 from '../../asser/profil1.png'


import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Container,
    Card,
    CardHeader,
    CardBody,
    Button,
  } from "reactstrap";
  import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    ButtonGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Nav,
    Navbar,
    Media,
  } from "reactstrap";

const Reservation = () => {
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
                              <h6 className="text-overflow m-0">Welcome!</h6>
                          </DropdownItem>
                          <DropdownItem to="/profil/*" tag={Link}>
                              <i className="ni ni-single-02" />
                              <span>Mon Profil</span>
                          </DropdownItem>
                          <DropdownItem to="/client" tag={Link}>
                              <i className="ni ni-support-16" />
                              <span>Sites</span>
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
   
      <section
      className="justify-content-center pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style={{
      minHeight: "600px",
      backgroundImage:
          "url(" + require("../../asser/profile-cover.jpg") + ")",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      }}
  >
      {/* Mask */}
      <span className="mask bg-gradient-default opacity-8" />
      {/* Header container */}

      <Container className="d-flex align-items-center" fluid>
      {/* <Row>
          <Col lg="7" md="10">
          <h1 className="display-2 text-white">Hello Mokhles</h1>
          <Button
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
          >
              Edit profile
          </Button>
          </Col>
      </Row> */}
      </Container>
      
  //       
   

      <Col className="justify-content-center order-xl-1" xl="8">
                  <Card className="bg-secondary shadow" >
                    <CardHeader className="bg-white border-0">
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Réserver</h3>
                        </Col>
                        <Col className="text-right" xs="4">
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Date Départ
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="lucky.jesse"
                                  id="input-username"
                                  placeholder="Date Départ"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Date retour
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="Date retour"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Durée avec le guide
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="Durée avec le guide"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Nombre de paticipant
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Lucky"
                                  id="input-first-name"
                                  placeholder="Nombre de paticipant"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Choisir le guide
                                </label>
                                <select>
                                  <option value="someOption">Choisir..</option>
                                  <option value="otherOption">Une autre option</option>
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Votre statut
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                  id="input-address"
                                  placeholder="Votre statut"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                         

                          <Button
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Réserver
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                </section>
    </section>
           

);
};

export default Reservation;
