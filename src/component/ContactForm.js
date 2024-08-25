import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  
  const addContact = (e) => {
    e.preventDefault();
    console.log(name,phoneNumber);
    dispatch({
      type: 'ADD_CONTACT',
      payload: {name, phoneNumber}
    })  
  } 
  return (
    <div className="left">
      <form onSubmit={addContact}>
        <h3>Name</h3>
        <input 
          onChange={(e)=>{setName(e.target.value);}}
          className="left_input" type="text" placeholder='Enter Name' />
        <h3>Phone Number</h3>
        <input
          onChange={(e)=>{setPhoneNumber(e.target.value);}} 
          className="left_input" type="text" placeholder="Phone Number"/>
        <div className="create_btn_area">
          <button type='submit'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm