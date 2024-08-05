import React, { useState } from 'react'
import './adminLogin.css'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'




const Adminl_ogin = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                if (res.Coordinator_user != null) {
                    
                    setSucessMsg('Logged in sucessfully')

               
                console.log(Coordinator_user);

                //console.log(loggeduser.email)
                   setEmail('')
                setPassword('')
                setErrorMsg('')
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/cmain');
                }, 3000);}
            })
            .catch((error) => {
                // const errorCode = error.code;
                // console.log(error.message)
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    setErrorMsg('Plz fill all required fields')
                }
                if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    setErrorMsg('Email not found');
                }
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setErrorMsg('Wrong Password');
                }
            });
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
                                    <form>
                                        <div class="form-group">
                                            <label class="form-control-label">USERNAME</label>
                                            <input type="text" class="form-control"
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PASSWORD</label>
                                            <input type="password" class="form-control"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="links">
                                            <a href='#'>Forget Password ?</a>
                                            <a><Link to={'/ad'}>You haven't Account..? Register Hear</Link></a>
                                        </div>

                                        <div class="col-lg-12 loginbttm">

                                            <div class="col-lg-6 login-btm login-button">
                                                <button type="submit" class="btn btn-outline-primary" onClick={handleLogin}>
                                                    Login
                                                </button>
                                                <span className='my-error'>
                                                    {errorMsg && <> <div className='error-msg'>{errorMsg}</div> </>}
                                                    {successMsg && <><div className='success-msg'>{successMsg}</div> </>}
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

export default Adminl_ogin