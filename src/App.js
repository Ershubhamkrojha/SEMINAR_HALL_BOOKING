 import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Main_page/Header";
import "./CSS_All_Img/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home_call_page/Home";
import SeminarHallDescription from "./Components/SminarHall/Seminar_hall_discription/SeminarHallDescription";
import Booking from "./Components/Booking_component/Booking";
import Footer from './Components/Home/Footer/Footer'
import Login from "./Components/Login_signup/Login";
import Signup from "./Components/Login_signup/Signup";
import CoOrdiantor from "./Components/Co_ordinator/CoOrdiantor";
import SeminarHall from "./Components/SminarHall/SeminarHall"
import About from "./Components/Home/About/About";
import Contact from "./Components/Contact/Contact";
import Coordinator_2 from "./Components/Aproval/Coordinator_2";
import Codinator_main from './Components/Co_ordinator/Coordinator_main_page/Codinator_main'
import Contact_rec_data from "./Components/Contact_fetch_table/Contact_rec_data";
import Team from "./Components/Team/Team";
import { useState, useEffect } from "react";
import Admin_signup from "./Components/Admin/Admin_signup";
import Adminl_ogin from "./Components/Admin/Adminl_ogin";


function App() {
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    console.log(auth);
  }, []);
  return (
    <div>
      {/* <BrowserRouter> */}

      <Header loggedIn={loggedIn} setloggedIn={setloggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={<Login loggedIn={loggedIn} setloggedIn={setloggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup loggedIn={loggedIn} setloggedIn={setloggedIn} />}
        />
        {loggedIn && (
          <>
            <Route path="/seminar-hall" element={<SeminarHallDescription />} />
            <Route path="/booking" element={<Booking />} />
          </> 
        )}
        <Route path="/co" element={<CoOrdiantor/>}/> 
        <Route path="/sem" element={<SeminarHall/>}/>       
        <Route path="/about" element={<About/>}/>
        <Route path="/ca" element={<Coordinator_2/>} />
        <Route path="/cmain" element={<Codinator_main/>} />
        <Route path="/cont" element={<Contact/>}/>
         <Route path="*" element={<Home />} />
         <Route path="/con_user" element={<Contact_rec_data/>} />
         <Route path="/team" element={<Team/>} />
         <Route path="/ad" element={<Admin_signup/>} />
         <Route path="/adl" element={<Adminl_ogin/>} />
        </Routes>
      <Footer />

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
