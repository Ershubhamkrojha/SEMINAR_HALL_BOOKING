// import React from 'react'
import React, { useState, useEffect } from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase-config'
const Contact_rec_data = () => {

  const [contact, setContact] = useState();
  const contactRef = collection(db, "contact_Data");

  const rejectContact = async (id) => {
    const contactDoc = doc(db, "contact_Data", id);
    await deleteDoc(contactDoc);
  }

  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(contactRef);
      setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc?.id })));
    }
    getContact();
  }, []);
  return (
    <div>

      <div className='view'>

        <br />
        <br />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> SN</th>
              <th scope="col"> Name</th>
              <th scope="col">Email</th>

              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col">Accept  <AiOutlineCheckSquare /></th>
              <th scope="col">Denied  <FaRegWindowClose /></th>
            </tr>
          </thead>
          <tbody>

            {
              contact?.map((contact, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{contact?.name}</td>
                    <td>{contact?.email}</td>
                    <td>{contact?.subject}</td>
                    <td>{contact?.message}</td>
                    <td><button className='logbtn'>Accept</button></td>
                    <td><button className='logbtn' onClick={() => { rejectContact(contact?.id) }}>reject</button></td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>



      </div>
    </div>
  )
}

export default Contact_rec_data