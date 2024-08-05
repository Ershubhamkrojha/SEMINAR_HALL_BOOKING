//  import React from 'react'

import React, { useState } from 'react'
import { db } from "../firebase-config"
import { collection, addDoc } from "firebase/firestore";
import "./contact.css"

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  const userInformation = collection(db, "contact_Data")
  const handleSubmit = () => {
    addDoc(userInformation, {
      name: name,
      email: email,
      subject: subject,
      message: message
    }).then(()=>{
      if(alert("Form Submited Sucessfuly!!!"))document.location="https://www.google.co.in/"
    })
  }

  return (
    <section id="Contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          {/* <h2>Contact</h2> */}
          <p>Contact Us</p>
        </div>
        <div className="row mt-5">

          <div className="col-lg-12 mt-5 mt-lg-0">

            <form action className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" className="form-control" id="name" placeholder="Your Name"
                    onChange={(event) => {
                      setName(event.target.value)
                    }
                    }
                    required />

                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" id="email" placeholder="Your Email"
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" id="subject" placeholder="Subject"
                  onChange={(event) => {
                    setSubject(event.target.value)
                  }} required />

              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" rows="5" placeholder="Message"
                  onChange={(event) => {
                    setMessage(event.target.value)
                  }}textarea />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="button" class="btn btn-success" onClick={handleSubmit}>submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact