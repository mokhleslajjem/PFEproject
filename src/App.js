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

const App = () => {
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
       <Main />
    </>
);
const ProfilLayout = () => (
    <>
       <Profile/>
    </>
);
const GuideLayout = () => (
    <>
       <Guide/>
    </>
);

export default App;
