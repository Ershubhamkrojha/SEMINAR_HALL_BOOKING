// import React from 'react'
import React, { useState } from 'react'
import { db } from "../firebase-config"
import { collection, addDoc } from "firebase/firestore";
import "./booking.css"
import AboutImg from "../../CSS_All_Img/images/seminar-hall/1.jpeg"
// import React, { Component } from 'react';
// import DatePicker from 'react-date-picker'

const Booking = () => {
  const [departmentName, setDepartmentName] = useState()
  const [seminarName, setSeminarName] = useState()
  const [eventName, setEventName] = useState()
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()

  // const disableBookDates=(setDate)=>{
  //   bookedDays.includes(setDate);
  // }
  // <DatePicker hintText="Random Date Disabled" shouldDisableDate={disableBookDates}


  const userInformation = collection(db, "Booking_Data")
  const handleSubmit = () => {

    addDoc(userInformation, {
      departmentName: departmentName,
      seminarName: seminarName,
      eventName: eventName,
      date: date,
      startTime: startTime,
      endTime: endTime

    }).then(() => {
      if (alert("Your Booking Request is Sent!!!")) document.location = "https://www.google.co.in/"
    })
  }

  return (
    <div className='booking-bg'>
      <div className="mt-5 container">
        {/* <img src={AboutImg} className="mt-5" /> */}
        <form className="form-booking">
          <div className="row">
            <div className="col-md-6 form-group mb-3">
              <label for="" className="col-form-label">Name Of Department *</label>
              <input type="text" className="form-control error" name="name" id="name" required
                placeholder="Enter Department Name"
                onChange={(event) => {
                  setDepartmentName(event.target.value)
                }
                }
                />
            </div>
            <div className="col-md-6 form-group mb-3">
              <label for="" className="col-form-label">Seminar Hall Name *</label>
              <input type="text" className="form-control error" name="Seminar Hall Name " id="Seminar Hall Name"
                placeholder="Seminar Hall Name "required
                onChange={(event) => {
                  setSeminarName(event.target.value)
                }
                }
              />



            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group mb-3">
              <label for="" className="col-form-label">Event of Booking *</label>
              <input type="text" className="form-control error" name="Event of Booking" id="Event of Booking"
                placeholder="Enter Event Name"required
                onChange={(event) => {
                  setEventName(event.target.value)
                }
                }
                 />
            </div>

          </div>
          <div className="row d-flex">
            <div className="col-md-6 form-group mb-3">
              <label for="" className="col-form-label">Date of Booking*</label>
              <input type="date" className="form-control error" name="Date of Booking" id="Date of Booking"
                placeholder="Date of Booking" min={new Date().toISOString().split("T")[0]} required 
                onChange={(event) => {
                  setDate(event.target.value)
                }   
                }
                 />
            </div>
            <div className="col-md-6 form-group mb-3">
              <label for="" className="col-form-label">Start time *</label>
              <input type="time" className="form-control error" name="Start time" id="Start time"
                placeholder="Start time " aria-required="true" required 
                onChange={(event) => {
                  setStartTime(event.target.value)
                }
                }

               />
            </div>
            <div className="col-md-6 form-group mb-3" >
              <label for="" className="col-form-label">End time *</label>
              <input type="time" className="form-control error" name="End time " id="End time"
                placeholder="Enter End time "required
                onChange={(event) => {
                  setEndTime(event.target.value)
                }
                }
                 />
            </div>
          </div>
          <div className='bookbtn'>
            <div className="text-center"><button type="button" className="btn btn-info" onClick={handleSubmit}>submit</button></div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Booking