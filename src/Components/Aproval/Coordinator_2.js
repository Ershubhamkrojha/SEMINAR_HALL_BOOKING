import React, { useEffect, useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import { query, orderBy, limit } from "firebase/firestore";
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { db } from '../firebase-config';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';




import './coordinator_2.css'
import { getToken } from 'firebase/messaging';
const Coordinator_2 = () => {

  const [bookings, setBookings] = useState();

  const bookingRef = collection(db, "Booking_Data");
  const rejectBooking = async (id) => {
    const bookingDoc = doc(db, "Booking_Data", id);
    await deleteDoc(bookingDoc).then(() => {
      if (alert(" Booking Request is Reject!!!")) document.location = "https://www.google.co.in/"
    })
  }


  useEffect(() => {
    const getBookings = async () => {
      const data = await getDocs(bookingRef);
      setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc?.id })));
    }
    getBookings();
  }, []);



  return (
    <div className='view'>

      <br />
      <br />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Department Name</th>
            <th scope="col">SeminarHall Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Event Date</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Accept  <AiOutlineCheckSquare /></th>
            <th scope="col">Denied  <FaRegWindowClose /></th>
          </tr>
        </thead>

        <tbody>
          {

            bookings?.map((booking, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{booking?.departmentName}</td>
                  <td>{booking?.seminarName}</td>
                  <td>{booking?.eventName}</td>
                  <td>{booking?.date}</td>
                  <td>{booking?.startTime}</td>
                  <td>{booking?.endTime}</td>
                  <td><button className='logbtn'>Accept</button></td>
                  <td><button className='logbtn' onClick={() => { rejectBooking(booking?.id) }}>reject</button></td>
                </tr>
              )
            })
          }

        </tbody>



      </table>

      <>
        <lable> Sort By:</lable>
        <select className='dropdown' name='colvalue'  >
          <option >Pelese Select</option>
          <option value='departmentName'>departmentName</option>
          <option value='seminarName'>seminarName</option>
          <option value='eventName'>eventName</option>
          <option value='date'>date</option>
          <option value='startTime'>startTime</option>
          <option value='endTime '>endTime</option>



        </select>
      </>



    </div>
  )
}

export default Coordinator_2

