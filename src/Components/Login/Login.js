// // import {useState, useContext} from 'react'
// import { Link } from 'react-router-dom'
// import React, { useContext } from 'react'
// import { useState, useEffect } from 'react';


// import {useNavigate } from "react-router-dom"
// import { BiLogInCircle } from "react-icons/bi"
// import { useDispatch, useSelector } from 'react-redux'
// import { login, reset, getUserInfo } from '../features/auth/authSlice'
// import { toast } from 'react-toastify'
// import Spinner from '../spinner/spinner.jsx'

// import axios from 'axios';
// // import { AuthContext } from '../context/AuthContext';

// // import AuthContext from '../context/AuthContext'
// import './Login.css'

// // axios.defaults.xsrfCookieName = 'csrftoken';
// // axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// // axios.defaults.withCredentials = true;


// // const client = axios.create({
// //   baseURL: "http://127.0.0.1:8000"
// // });



// function Inscrirepage() {
//   // const {loginUser} = useContext(AuthContext)
//   // const handleSubmit = e => {
//   //   e.preventDefault()
//   //   const email = e.target.email.value
//   //   const password = e.target.password.value

//   //   email.length > 0 && loginUser(email, password)

//   //   console.log(email)
//   //   console.log(password)
   
//   // }

//   // const [email, setEmail] = useState("")
//   // const [username, setUsername] = useState("")
//   // const [password, setPassword] = useState("")
//   // const [password2, setPassword2] = useState("")

//   // const {registerUser} = useContext(AuthContext)

//   // console.log(email);
//   // console.log(username);
//   // console.log(password);
//   // console.log(password2);


//   // const handleSubmit = async e => {
//   //   e.preventDefault()
//   //   registerUser(email, username, password, password2)
//   // }
  
//   const [formData, setFormData] = useState({
//     "email": "",
//     "password": "",
// })
// const { email, password } = formData

// const dispatch = useDispatch()
// const navigate = useNavigate()

// const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

// const handleChange = (e) => {
//   setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//   })
//   )         
// }

// const handleSubmit = (e) => {
//   e.preventDefault()

//   const userData = {
//       email,
//       password,
//   }
//   dispatch(login(userData))
// } 

// useEffect(() => {
//   if (isError) {
//       toast.error(message)
//   }

//   if (isSuccess || user) {
//       navigate("http://localhost:3000/client")
//   }

//   dispatch(reset())
//   dispatch(getUserInfo())

// }, [isError, isSuccess, user, navigate, dispatch])



//   return (
//     <div>
//       <>
//         <section className="vh-100" style={{ backgroundColor: "#fff" }}>
//           {/* <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col col-xl-10">
//                 <div className="card" style={{ borderRadius: "1rem" }}>
//                   <div className="row g-0">
//                     <div className="col-md-6 col-lg-5 d-none d-md-block">
//                       <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                         alt="login form"
//                         className="img-fluid"
//                         style={{ borderRadius: "1rem 0 0 1rem" }}
//                       />
//                     </div>
//                     <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                       <div className="card-body p-4 p-lg-5 text-black">
//                         <form>
//                           <div className="d-flex align-items-center mb-3 pb-1">
//                             <i
//                               className="fas fa-cubes fa-2x me-3"
//                               style={{ color: "#ff6219" }}
//                             />
//                             <span className="h2 fw-bold mb-0">
//                               Welcome to <b>Desphixs👋</b>
//                             </span>
//                           </div>
//                           <h5
//                             className="fw-normal mb-3 pb-3"
//                             style={{ letterSpacing: 1 }}
//                           >
//                             Sign Up
//                           </h5>
//                           <div className="form-outline mb-4">
//                             <input
//                               type="email"
//                               id="form2Example17"
//                               className="form-control form-control-lg"
//                               placeholder="Email Address"
//                               // onChange={e => setEmail(e.target.value)}
//                             />
//                           </div>
//                           <div className="form-outline mb-4">
//                             <input
//                               type="text"
//                               id="form2Example17"
//                               className="form-control form-control-lg"
//                               placeholder="Username"
//                               // onChange={e => setUsername(e.target.value)}

//                             />
//                           </div>
//                           <div className="form-outline mb-4">
//                             <input
//                               type="password"
//                               id="form2Example17"
//                               className="form-control form-control-lg"
//                               placeholder="Password"
//                               // onChange={e => setPassword(e.target.value)}

//                             />
//                           </div>
//                           <div className="form-outline mb-4">
//                             <input
//                               type="password"
//                               id="form2Example27"
//                               className="form-control form-control-lg"
//                               placeholder="Confirm Password"
//                               // onChange={e => setPassword2(e.target.value)}

//                             />
//                           </div>
//                           <div className="pt-1 mb-4">
//                             <button
//                               className="btn btn-dark btn-lg btn-block"
//                               type="submit"
//                             >
//                               Register
//                             </button>
//                           </div>
//                           <a className="small text-muted" href="#!">
//                             Forgot password?
//                           </a>
//                           <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                             Already have an account?{" "}
//                             <Link to="/login" style={{ color: "#393f81" }}>
//                               Login Now
//                             </Link>
//                           </p>
//                           <a href="#!" className="small text-muted">
//                             Terms of use.
//                           </a>
//                           <a href="#!" className="small text-muted">
//                             Privacy policy
//                           </a>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <div className='formcontainer'>
//           <img
//                         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                         alt="login form"
//                         className="img-fluid"
//                         style={{ borderRadius: "1rem 0 0 1rem" }}
//                       />
//                       <div>
//                         <form>
//                           <div>
//                             <i
//                               className="fas fa-cubes fa-2x me-3"
//                               style={{ color: "#ff6219" }}
//                             />
//                             <h3>
//                               Welcome to <b>Travel👋</b>
//                             </h3>
//                           </div>
//                           <h5
//                             className="fw-normal mb-3 pb-3"
//                             style={{ letterSpacing: 1 }}
//                           >
//                             connecter
//                           </h5>

//                           {isLoading && <Spinner />}
//                           <div>
//                             <input
//                               type="email"
//                               id="form2Example17"
//                               className="form-control "
//                               placeholder="Adresse e-mail"
//                               name='email'
//                               onChange={handleChange}
//                               // onChange={e => setEmail(e.target.value)}
//                             />
//                           </div>
                          
                          
//                           <div className="form-outline mb-4">
//                             <input
//                               type="password"
//                               id="form2Example17"
//                               className="form-control form-control-lg"
//                               placeholder="Password"
//                               name='password'
//                               onChange={handleChange}
//                               // onChange={e => setPassword(e.target.value)}

//                             />
//                           </div>
                          
//                           <div className="pt-1 mb-4">
                           
//                               <button
//                                 className="btn-submit"
//                                 type="submit"
//                                 // onClick={handleSubmit}
//                               >
//                                 Connexion 
                               
//                               </button>
                             

//                           </div>
                         
//                           <a className="text-11 mb-10" href="#!">
//                           Mot de passe oublié?
//                           </a>
//                           <p className="text-11 mb-10" style={{ color: "#393f81" }}>
//                           vous n'avez pas de compte ?{" "}
//                             <Link to="/register" style={{ color: "#393f81" }}>
//                             Inscrivez-vous ici
//                             </Link>
//                           </p>
//                           <a href="#!" className="text-11 mb-10">
//                           Conditions d'utilisation.
//                           </a>
//                           <a href="#!" className="text-11 mb-10">
//                           Politique de confidentialité
//                           </a>
//                         </form>
//                       </div>
//           </div>
//         </section>
//         <footer className="bg-light text-center text-lg-start">
//           {/* Copyright */}
//           <div
//             className="text-center p-3"
//             style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//           >
//             © 2019 - till date Copyright:
//             <a className="text-dark" href="https://mdbootstrap.com/">
//               Travel
//             </a>
//           </div>
//           {/* Copyright */}
//         </footer>
//     </>

//     </div>
//   )
// }

// export default Inscrirepage


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signIn } from '../../api';  // Assurez-vous que le chemin est correct

// import './login.css';

function Loginpage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            email: formData.email,
            password: formData.password
        };

        try {
            const data = await signIn(credentials);
            toast.success("Connexion réussie!");
            // Sauvegardez le token dans le localStorage ou le contexte d'authentification
            localStorage.setItem('authToken', data.token);
            navigate('/dashboard');  // Redirigez vers la page de tableau de bord après connexion réussie
        } catch (error) {
            toast.error("Erreur de connexion: " + error.detail);
        }
    };

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={handleSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }} />
                                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Welcome to <b>Travel👋</b></h3>
                                                </div>
                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Connexion</h5>
                                                <div className="form-outline mb-4">
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Adresse e-mail" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control form-control-lg" placeholder="Mot de passe" />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit">Connexion</button>
                                                </div>
                                                <a className="small text-muted" href="#!">Mot de passe oublié?</a>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Pas de compte? <Link to="/inscription" style={{ color: "#393f81" }}>Inscrivez-vous ici</Link></p>
                                                <a href="#!" className="small text-muted">Conditions d'utilisation.</a>
                                                <a href="#!" className="small text-muted">Politique de confidentialité</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Loginpage;
