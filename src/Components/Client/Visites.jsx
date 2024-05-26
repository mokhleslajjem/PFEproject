// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    CardTitle
  } from "reactstrap";
  import './Visites.css';
  import NavbarClient from "../Navbar/navbarClient";
  import React from 'react'
//   import {createRoot} from 'react-dom/client';
//   import {APIProvider, Map, GoogleMap, Marker} from '@vis.gl/react-google-maps';
//   import { GoogleMap, Marker } from '@vis.gl/react-google-maps';
//   import { API_KEY } from '../config';  // Assurez-vous que le chemin est correct
//   import App from '../App';  // Assurez-vous que le chemin est correct
//   import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };

  // core components
  
  const Visites = () => {
    return (
      <>
        <NavbarClient />
            {/* <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                <div className="header-body">
                    {/* Card stats 
                    <Row>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                            <div className="col">
                                <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                                >
                                Traffic
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                350,897
                                </span>
                            </div>
                            <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-chart-bar" />
                                </div>
                            </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                                <i className="fa fa-arrow-up" /> 3.48%
                            </span>{" "}
                            <span className="text-nowrap">Since last month</span>
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                            <div className="col">
                                <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                                >
                                New users
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">2,356</span>
                            </div>
                            <Col className="col-auto">
                                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                <i className="fas fa-chart-pie" />
                                </div>
                            </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-danger mr-2">
                                <i className="fas fa-arrow-down" /> 3.48%
                            </span>{" "}
                            <span className="text-nowrap">Since last week</span>
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                            <div className="col">
                                <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                                >
                                Sales
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">924</span>
                            </div>
                            <Col className="col-auto">
                                <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                <i className="fas fa-users" />
                                </div>
                            </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-warning mr-2">
                                <i className="fas fa-arrow-down" /> 1.10%
                            </span>{" "}
                            <span className="text-nowrap">Since yesterday</span>
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                            <div className="col">
                                <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                                >
                                Performance
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">49,65%</span>
                            </div>
                            <Col className="col-auto">
                                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                <i className="fas fa-percent" />
                                </div>
                            </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-success mr-2">
                                <i className="fas fa-arrow-up" /> 12%
                            </span>{" "}
                            <span className="text-nowrap">Since last month</span>
                            </p>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </div>
                </Container>
            </div> */}
            {/* <APIProvider apiKey={API_KEY}>
                <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
             </APIProvider> */}
        
    </>

    );
  };
//  const root = createRoot(document.querySelector('#app'));
//  root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const API_KEY = 'your_api_key_here';

  
  export default Visites;
  