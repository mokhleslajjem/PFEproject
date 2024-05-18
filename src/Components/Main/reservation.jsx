import React, { useState } from "react";


import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Card,
    CardHeader,
    CardBody,
    Button,
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
        
        
   

<Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
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
                            type="text"
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
                            type="email"
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
                            type="email"
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
                            type="text"
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
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Civilité
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="Civilité"
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

);
};

export default Reservation;
