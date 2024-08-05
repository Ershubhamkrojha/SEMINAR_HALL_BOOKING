import './adminLogin.css'
import React, { useState } from "react";
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Loader from "./Loader/Loader";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";



const Admin_signup = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumbar] = useState("");
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const Coordinator_user = userCredential.Coordinator_user;

                addDoc(collection(db, "Coordinator_user"), {
                    username: username, email: email,
                    numbar: number, address: address,
                    password: password, uid: user.uid
                }).then(() => {
                    setSuccessMsg("User Added Successfully")
                    setUserName('')
                    setEmail('')
                     setNumbar('')
                    setAddress('')
                    setPassword('')
                    setTimeout(() => {
                        setSuccessMsg('');
                        navigate('/adl');
                    }, 3000);
                })
            }).catch((error) => {
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setErrorMsg('Plz fill all fields');
                }
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setErrorMsg('User alread exist');
                }
                if (error.message === 'Firebase: Error (auth/invalid-display-name).') {
                    setErrorMsg('UserName Error');
                }



            })
    }


    return (
        <>

            <div>

                <div class="container1">
                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                            CO Ordinator PANEL
                          
                            </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form autoComplete="off">
                                        <div class="form-group">
                                            <label class="form-control-label">USERNAME</label>
                                            <input type="text" class="form-control"
                                                onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">Email</label>
                                            <input type="text" class="form-control"
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PASSWORD</label>
                                            <input type="password" class="form-control"
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="links">
                                            <a href="#">Forget Password ?</a>
                                            <a>
                                                <Link to={"/adl"}>you haven't Account..? Login</Link>{" "}
                                            </a>
                                        </div>


                                        <div class="col-lg-12 loginbttm">

                                            <div class="col-lg-6 login-btm login-button">
                                                <button type="submit" class="btn btn-outline-primary" onClick={handleSubmit} >
                                                    Signup
                                                </button>
                                                <span className='my-error'>
                                                    {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
                                                    {successMsg && <> <div className='success-msg'>{successMsg}</div> </>}
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Admin_signup