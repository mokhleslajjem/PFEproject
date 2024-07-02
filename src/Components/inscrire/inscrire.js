


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signUp } from '../../api';  // Assurez-vous que le chemin est correct

import './inscrire.css';

function Inscrirepage() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        password: '',
        password2: '',
        role: '',
        langues: '',
        competence: '',
        avis: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRoleChange = (e) => {
        setFormData({
            ...formData,
            role: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            toast.error("Les mots de passe ne correspondent pas");
            return;
        }

        const userData = {
            nom: formData.nom,
            prenom: formData.prenom,
            email: formData.email,
            telephone: formData.telephone,
            password: formData.password,
            password2: formData.password2,
            user_type: formData.role,
            langues: formData.langues,
            competence: formData.competence,
            avis: formData.avis
        };

        try {
            await signUp(userData);
            toast.success("Inscription réussie!");
            navigate('/login');
        } catch (error) {
            toast.error("Erreur lors de l'inscription: " + error.detail);
        }
    };

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#fff" }}>
                <div className='formcontainer'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }} />
                                <h3>Welcome to <b>Travel👋</b></h3>
                            </div>
                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Inscription</h5>
                            <div className="form-outline mb-4">
                                <select value={formData.role} onChange={handleRoleChange} className="form-control">
                                    <option value="">Choisir...</option>
                                    <option value="client">Je suis Touriste</option>
                                    <option value="guide">Je suis Guide</option>
                                </select>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="form-control" placeholder="prenom" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-control" placeholder="nom" />
                            </div>

                            {formData.role === 'guide' && (
                                <>
                                    <div className="form-outline mb-4">
                                        <input type="text" name="langues" value={formData.langues} onChange={handleChange} className="form-control" placeholder="langues" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" name="competence" value={formData.competence} onChange={handleChange} className="form-control" placeholder="competence" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text" name="avis" value={formData.avis} onChange={handleChange} className="form-control" placeholder="avis" />
                                    </div>
                                </>
                            )}

                            <div className="form-outline mb-4">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Adresse e-mail" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Mot de passe" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="password" name="password2" value={formData.password2} onChange={handleChange} className="form-control" placeholder="Confirmez le mot de passe" />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="form-control" placeholder="telephone" />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn-submit" type="submit">Inscription</button>
                            </div>
                            <p className="text-11 mb-10" style={{ color: "#393f81" }}>
                                Vous avez déjà un compte? <Link to="/login" style={{ color: "#393f81" }}>connexion</Link>
                            </p>
                            <a href="#!" className="text-11 mb-10">Conditions d'utilisation.</a>
                            <a href="#!" className="text-11 mb-10">Politique de confidentialité</a>
                        </form>
                    </div>
                </div>
            </section>
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2019 - till date Copyright: <a className="text-dark" href="https://mdbootstrap.com/">Travel</a>
                </div>
            </footer>
        </div>
    );
}

export default Inscrirepage;
