import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Signup from "../Login_signup/Signup";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "./Loader/Loader";




const Login = ({ loggedIn, setloggedIn }) => {

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [successMsg, setSucessMsg] = useState("")

  // const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setloading(true);

    // seterror(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user != null) {
          setloggedIn(true);
          setSucessMsg('Logged in sucessfully')
          // localStorage.setItem("auth", 1);
          // navigate("/sem");
          setemail('')
          setPassword('')
          seterror('')
          setTimeout(() => {
            setSucessMsg('');
            navigate('/sem')
          }, 3000)
        }
      })
      // setloading(false);
      .catch((error) => {
        // console.log(err);
        // setloading(false);
        // seterror(err.message);
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          seterror('Plz fill all required fields')
        }
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          seterror('Email not found');
        }
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          seterror('Wrong Password');
        }
        localStorage.removeItem("auth");
        setloggedIn(false);
      });
    }

    return (
      <>
        {/* {loading && <Loader />} */}
        <div className="mainBox">
          <div className="boxx">
            {/* <form autoComplete='off' onSubmit={handleSubmit}> */}
            <form autoComplete="off" className="myform" onSubmit={handleSubmit}>
              <span className="logo">
                <u>WeLcOmE</u>
              </span>
              <h2>Sign in</h2>
              <div className="inputBoxx">
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <span>UserName</span>
                <i></i>
              </div>
              <div className="inputBoxx">
                <input 
                  onChange={(e) => {
                    setPassword(e.target.value)} }type="password" required
                 
                />
                <span>Password</span>
                <i></i>
              </div>
              {/* {error && <span className="danger">{error}</span>} */}
              <div className="links">
                <a href="#">Forget Password ?</a>
                <a>
                  <Link to={"/Signup"}>you haven't Account..? Signup</Link>{" "}
                </a>
              </div>
              <button type="submit" className="logbtn">
                Login
              </button>
              <span className='my-error'>
              {error&& <> <div className='error-msg'>{error}</div> </>}
              {successMsg && <><div className='success-msg'>{successMsg}</div> </>}
            </span>
              {/* {err && <span>Something Worng</span>} */}
            </form>
          </div>
        </div>
      </>
    );
  };

  export default Login;
