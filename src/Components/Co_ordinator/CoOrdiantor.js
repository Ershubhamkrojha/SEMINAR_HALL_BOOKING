
import Teacher from "../../CSS_All_Img/images/teacher/1.jpg";
import "./coordinator.css"
import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { ImUser } from 'react-icons/im';
import { MdOutlineSell } from 'react-icons/md'
import { auth, db } from '../firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'


const CoOrdiantor = () => {
  const GetCurrentUser = () => {
    const [user, setUser] = useState('');
    const userCollectionRef = collection(db, "Coordinator_user");

    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          // console.log(userlogged.email)
          const getUsers = async () => {
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
            // console.log(q)
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          };
          getUsers();
        }
        else {
          setUser(null);
        }
      })
    }, [])
    return user
  }

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/co');
    })
  }

  const loggeduser = GetCurrentUser();
  const navigate = useNavigate();
  const myStyle = { backgroundColor: "#1a1c30" }



  return (
    <>
      <div className="co-container ">

        <div className="co_img-div">
          <img src={Teacher} className="co_img" alt="" />
        </div>
        <div className="cl">
          {loggeduser &&
          
              <button type="submit" className="btn btn-outline-primary" onClick={handleLogout} >
                CoOrdiantor Logout
              </button>
        }

          {!loggeduser &&

            <button type="submit" class="btn btn-outline-primary" >
              <Link to={'/adl'}>CoOrdinator Login</Link>
            </button>


          }

        </div>
      </div>
    </>
  );
};

export default CoOrdiantor;


