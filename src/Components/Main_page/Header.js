import './header.css'
// import Home from '../Home_call_page/Home'
import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { ImUser } from 'react-icons/im';
import { MdOutlineSell } from 'react-icons/md'
import { auth, db } from '../firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { Dropdown, NavDropdown } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
const Header = ({ loggedIn, setloggedIn }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setloggedIn(false);
    navigate("/");
  };

  //Admin  login setting




  // const GetCurrentUser = () => {
  //   const [user, setUser] = useState('');
  //   const userCollectionRef = collection(db, "Coordinator_user");

  //   useEffect(() => {
  //     auth.onAuthStateChanged(userlogged => {
  //       if (userlogged) {
  //         // console.log(userlogged.email)
  //         const getUsers = async () => {
  //           const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
  //           // console.log(q)
  //           const data = await getDocs(q);
  //           setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //         };
  //         getUsers();
  //       }
  //       else {
  //         setUser(null);
  //       }
  //     })
  //   }, [])
  //   return user
  // }

  // const handleLogout = () => {
  //   auth.signOut().then(() => {
  //     navigate('/');
  //   })
  // }

  // const loggeduser = GetCurrentUser();
  // //  const navigate = useNavigate();
  // const myStyle = { backgroundColor: "#1a1c30" }

  return (


    <header className="fixed-top header">
      <div className="row">
        <div className="col-4" />
        <div className="col-4">
          <nav class="navbar navbar-expand-lg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link className="nav-link" to={"/"}>Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/about'}>About</Link>

                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/sem'}> Seminar hall</Link>

                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/co'}>Co-Ordinators</Link>


                </li>
                <li class="nav-item">
                  <Link className="nav-link" to={'/cont'}>Contact</Link>
                </li>

                {/* {loggeduser &&
                  <li class="nav-item" onClick={handleLogout}>
                 
                   */}
                  {/* <NavLink to={'/profile'} className="nav-link user-iconn"><Home/></NavLink> */}
                    {/* <a class="nav-link">AdminLogout</a>
                  </li>} */}

                  
                {/* {!loggeduser &&
                  <li class="nav-item">
                    <Link class="nav-link" to={"/adl"}>
                      AdminLogin
                    </Link>
                  </li>
                } */}

                {loggedIn ? (
                  <li class="nav-item" onClick={logoutHandler}>
                    <a class="nav-link">Logout</a>
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link class="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-2"></div>
        <div className="col-2 align-self-end "></div>
      </div>
    </header>
  );
};

export default Header;
