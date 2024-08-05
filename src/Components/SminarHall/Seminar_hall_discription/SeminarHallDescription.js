import React from "react";
import { useNavigate } from "react-router-dom";
import "../Seminar_hall_discription/seminarHalldesc.css"
import AboutImg from "../../../CSS_All_Img/images/seminar-hall/1.jpeg";

const SeminarHallDescription = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-8">
              <img src={AboutImg} className="w-100 mt-5" alt="" />
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3>Conference Hall-Seminar Hall</h3>
                {/* <ul>
                  <li>
                    <strong>Hall Name</strong>:

                                   
                  </li>
                  <li>
                    <strong>Size</strong>: 12.19 x 27.23
                  </li>
                  <li>
                    <strong>Capacity</strong>: 357
                  </li>
                </ul> */}
              </div>
              <div class="portfolio-description">
                <h2>   Hall information  </h2>
                <p className="abtcvraman">
                  In department of MCA, MBA, MSc the seminar hall name is C K Prahalad with capacity of 415 with size of 494.56 square feet. In electronics and instrumental engineering the seminar hall name is Homi j. bhabha with capacity of 120 with size of 7.14 x 16.31 m. In department of electrical and electronics engineering the seminar hall name is Mahatma Gandhi with capacity of 220.In department of Science and Humanity the seminar hall name is Sir C V Raman with capacity of 357 with size of 12.19 x 27.43 in metres.
                  Whenever we can need the data, we can easily access the database to retrieve the data that are already stored .The booking dates will be updated periodically day by day. It provides a simple user interface to the users. The user can login and book the respective seminar hall. If that hall is booked already, the dates will be disabled. The dates from now and end of month will be active to book the seminar hall and other past dates will disabled.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <button
          className="rounded btn btn-lightorange"
          onClick={() => {
            navigate("/booking");
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SeminarHallDescription;
