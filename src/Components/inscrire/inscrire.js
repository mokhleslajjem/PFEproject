import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './inscrire.css';

function Inscrirepage() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    language: '',
    specialty: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      telephone: '',
      language: '',
      specialty: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique de soumission ici
  };

  return (
    <div>
      <>
        <section className="vh-100" style={{ backgroundColor: "#fff" }}>
          <div className='formcontainer'>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="img-fluid"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }} />
                  <h3>Welcome to <b>Travel👋</b></h3>
                </div>
                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Inscription</h5>
                
                <div className="form-outline mb-4">
                  <select value={role} onChange={handleRoleChange} className="form-control">
                    <option value="">Choisir...</option>
                    <option value="tourist">Je suis Touriste</option>
                    <option value="guide">Je suis Guide</option>
                  </select>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="Prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Prénom"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="Nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>

                {role === 'guide' && (
                  <>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Langue"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Specialité"
                      />
                    </div>
                  </>
                )}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Adresse e-mail"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Confirmez le mot de passe"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Téléphone"
                  />
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn-submit" type="submit">Inscription </button>
                </div>

                <p className="text-11 mb-10" style={{ color: "#393f81" }}>
                Vous avez déjà un compte?{" "}
                  <Link to="/login" style={{ color: "#393f81" }}>connexion</Link>
                </p>
                <a href="#!" className="text-11 mb-10">Conditions d'utilisation.</a>
                <a href="#!" className="text-11 mb-10">Politique de confidentialité</a>
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2019 - till date Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">Travel</a>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Inscrirepage;
