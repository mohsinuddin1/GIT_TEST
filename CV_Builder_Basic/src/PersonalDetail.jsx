import React from "react";
import { useState } from "react";
import './App.css'

function PersonalDetails(props) {
  const {
    details,
    handleChangeBasic,
  } = props;



  return (
    <div className='personal'>
      <div className='title'>Personal Details</div>

      <div className="input-group">
        <label htmlFor='name' className='label'>Full Name:</label>
        <input type="text" id="name" className='input'
          value={details.name} onChange={handleChangeBasic}
          name="name" />

      </div>

      <div className="input-group">
        <label htmlFor='email' className='label'>Email:</label>
        <input type="email" id="email" className='input'
          value={details.email} onChange={handleChangeBasic}
          name="email" />
      </div>

      <div className="input-group">
        <label htmlFor='Phone Number' className='label'>Phone Number:</label>
        <input type="text" id='PhoneNumber' className='input'
          value={details.phno} onChange={handleChangeBasic}
          name="phno" />
      </div>

      <div className="input-group">
        <label htmlFor='address' className='label'>Address:</label>
        <input type="text" id='address' className='input'
          value={details.address} onChange={handleChangeBasic}
          name="address" />
      </div>

    </div>

  );
}
export default PersonalDetails;