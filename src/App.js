import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loginpage from "./Components/Login/Login";
import Contact from "./Components/contact/contact";
import Inscrirepage from "./Components/inscrire/inscrire"
import Client from "./Components/Client/Client";
import Profile from "./Components/Profil/profil";
import Guide from "./Components/Guide/Guide";
import Visites from "./Components/Client/Visites";
import NavbarClient from "./Components/Navbar/navbarClient";
import Reservation from "./Components/Main/reservation";
import Maps from "./Components/Maps/Maps";
// import LeafletGeocoder from "./Components/Maps/LeafletGeocoder.jsx";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import site from "./Components/site/site";
import Chatbot from "./Components/Chatbot/Chatbot.jsx";
import ErrorBoundary from "./Components/Chatbot/ErrorBoundary";

// import Map from "./Components/map/map";
// import { AuthContext } from './context/AuthContext'
// import Axios from 'axios'
// import { useEffect,useState } from "react"; 
// import Cards from "./Cards";





const App = () => {

//     const [data, setData] = useState([]);
//   useEffect(() => {
//     Axios.get("http://127.0.0.1:8000").then((res) => setData(res.data));
//   }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<LoginPageLayout />} />
                <Route path="/register" element={<InscrirePageLayout />} />
                <Route path="/contact" element={<ContactPageLayout />} />
                <Route path="/client" element={<EspaceClientLayout />} />
                <Route path="/profil/*" element={<ProfilLayout />} />
                <Route path="/guide/*" element={<GuideLayout />} />
                <Route path="/client/visites" element={<VisitesLayout />} />
                <Route path="/client/reservation" element={<ReservationLayout />} />
                <Route path="/client/localisation" element={<LocalisationLayout />} />


            </Routes>
        </Router>
    );
};

const MainLayout = () => (
    <>
        <Navbar />
        <Home />
        <Chatbot />
        <Main />
        <Footer />
    </>
);

const LoginPageLayout = () => (
    <>
        <Navbar />
        <Loginpage />
    </>
);

const InscrirePageLayout = () => (
    <>
        <Navbar />
        <Inscrirepage />
    </>
);
const ContactPageLayout = () => (
    <>
        <Navbar />
        <Contact />
    </>
);
const EspaceClientLayout = () => (
    <>
       <Client/>
      
    </>
);
const ProfilLayout = () => (
    <>
       <NavbarClient />
       <Profile/>
    </>
);
const GuideLayout = () => (
    <>
       <Guide/>
    </>
);
const VisitesLayout = () => (
    <>
       <Visites/>
    </>
);
const ReservationLayout = () => (
    <>
       {/* <NavbarClient /> */}
       <Reservation/>
       {/* <Footer /> */}
    </>
);
const LocalisationLayout = () => (
    <>
       <Maps />
    </>
);


const siteLayout = () => (
    <>
    <site/>
    
    </>
);
// const MapLayout = () => (
//     <>
//       <map />
//     </>
// );

export default App;
