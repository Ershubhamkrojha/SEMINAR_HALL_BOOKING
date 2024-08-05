import React from "react";
import About from "../Home/About/About";
import CoOrdiantor from "../Co_ordinator/CoOrdiantor";
import Intro from "../Home/Main_name/Intro";
import SeminarHall from "../SminarHall/SeminarHall";
import Team from "../Team/Team"
const Home = () => {
  return (
    <>
      <Intro />
      <About />
      {/* <SeminarHall /> */}
      {/* <CoOrdiantor /> */}
      <Team/>
     
    </>
  );
};

export default Home;
