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
<<<<<<< HEAD
import Maps
from "./Components/Maps/Maps";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
=======
import site from "./Components/site/site";


// import Map from "./Components/map/map";
// import { AuthContext } from './context/AuthContext'
// import Axios from 'axios'
// import { useEffect,useState } from "react"; 
// import Cards from "./Cards";




>>>>>>> ae465a8830316ba62ab00988ed7c06f50a01d193

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
<<<<<<< HEAD
                <Route path="/client/localisation" element={<LocalisationLayout />} />

=======
                <Route path="/A propos" element={<siteLayout />} />

                
                {/* <Route path="/map" element={<MapLayout />} /> */}
>>>>>>> ae465a8830316ba62ab00988ed7c06f50a01d193

            </Routes>
        </Router>
    );
};

const MainLayout = () => (
    <>
        <Navbar />
        <Home />
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
<<<<<<< HEAD
const LocalisationLayout = () => (
    <>
       <Maps />
    </>
);


=======
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
{/* <Cards 
          name={value.name}
          age={value.age}
          city={value.city}
          country={value.country}
          id={value.id}
        />  */}
>>>>>>> ae465a8830316ba62ab00988ed7c06f50a01d193
export default App;
