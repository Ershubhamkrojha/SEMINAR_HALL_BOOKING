import React from 'react'
import { Link } from 'react-router-dom'
import SeminarHall1 from "../../CSS_All_Img/images/seminar-hall/1.jpeg"
import SeminarHall2 from "../../CSS_All_Img/images/seminar-hall/2.jpeg"
import SeminarHall3 from "../../CSS_All_Img/images/seminar-hall/3.jpeg"
import SeminarHall4 from "../../CSS_All_Img/images/seminar-hall/4.jpeg"
import SeminarHall5 from "../../CSS_All_Img/images/seminar-hall/5.jpeg"

const SeminarHall = () => {
  return (
    <section id="seminar-hall" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Seminar Halls</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <img className='rounded mb-2' width="350px" height="250px" src={SeminarHall1}></img>
              <h4><Link to={"/seminar-hall"}>Sir C.V. Raman Hall</Link></h4>
              <p>Located at Science and humanity Department</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
            <img src={SeminarHall3} className='rounded  mb-2' width="350px" height="250px"></img>
              <h4><Link to={"/seminar-hall"}>Homi J.bhabha</Link></h4>
              <p>Located at E & I Department</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
            <img src={SeminarHall2} className='rounded mb-2' width="350px" height="250px"></img>
              <h4><Link to={"/seminar-hall"}>Mahatma Gandhi Hall</Link></h4>
              <p>Located at EEE Department</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
            <img src={SeminarHall4} className='rounded mb-2' width="350px" height="250px"></img>
              <h4><Link to={"/seminar-hall"}>C.K Prahalad</Link></h4>
              <p>Located at MBA Block</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
            <img src={SeminarHall5} className='rounded mb-2' width="350px" height="250px"></img>
              <h4><Link to={"/seminar-hall"}>Thiruvalluvar hall</Link></h4>
              <p>Located at CT-UG Department</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
            <img src={SeminarHall5} className='rounded mb-2' width="350px" height="250px"></img>
              <h4><Link to={"/seminar-hall"}>Ramanujan </Link></h4>
              <p>IT Park</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SeminarHall