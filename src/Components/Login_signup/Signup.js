import React, { useState } from "react";
import "./Login.css";
import { auth,db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "./Loader/Loader";
import {Link, useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";

// import { collection, addDoc } from '../firebase-config'

const Signup = () => {   
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [loading, setloading] = useState(false);
  const [successMsg,setSucessMsg]=useState("")
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // setloading(true);
    // seterror(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        const inialUserValue=0;
        console.log(user);
        addDoc(collection(db,"user"),{
          useremail: email,
          userpassword:password,
          uid:user.uid
        }).then(()=>{setSucessMsg('New user added sucessfully,You will now be automatically redireced to login page.')
           setemail('')
           setPassword('')
           setTimeout(()=>{
            setError('');
            navigate('/Login')
           },3000)

        })
        // setloading(false);
        // console.log(res);
        // navigate("/Login");
      }).catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
            setError('Plz fill all fields');
        }
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            setError('User alread exist');
        }
        if (error.message === 'Firebase: Error (auth/invalid-display-name).') {
            setError('UserName Error');
  }
})


      // .catch((err) => {
      //   console.log(err.message);
      //   setloading(false);
      //   seterror(err.message);
      // });
  };

  return (
    <div>
      {/* {loading && <Loader />} */}
      <div className="mainBox">
        <div className="boxx">
          <form
            autoComplete="off"
            className="myform"
            onSubmit={onSubmitHandler}
          >
            <span className="logo">
              <u>WeLcOmE</u>
            </span>
            <h2>Sign up</h2>
            <div className="inputBoxx">
              <input
                type="text"
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBoxx">
              <input
                
                
                onChange={(e) => setPassword(e.target.value)}
                type="password" required
      
              />
              <span>Password</span>
              <i></i>
            </div>
            {/* {error && <div className="danger">{error}</div>} */}
            <div className="links">
              <a href="#">Forget Password ?</a>
              <a>
              <Link to={"/Login"}>you haven't Account..? Login</Link>{" "}
               </a>
            </div>
            <button type="submit" className="logbtn">
              Signup
            </button>
            {/* {err && <span>Something Worng</span>} */}
            <span className='my-error'>
                            {error && <> <div className='error-msg'>{error}</div> </>}
                            {successMsg && <> <div className='success-msg'>{successMsg}</div> </>}
                        </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
