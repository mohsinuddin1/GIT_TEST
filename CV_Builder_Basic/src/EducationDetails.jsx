import React from "react";
import { useState } from "react";
import './App.css'

function PersonalDetails(props) {
  const {
    details,
    handleChangeEducation,
  } = props;



  return (
    <div className='personal' >
      <div className='title'>Education Details</div>

      <div className="input-group">
        <label htmlFor='high School' className='label'>High School:</label>
        <input type="text" id="highSchool" className='input'
          value={details.highSchool} onChange={handleChangeEducation}
          name="highSchool" />

      </div>

      <div className="input-group">
        <label htmlFor='university' className='label'>University:</label>
        <input type="email" id="university" className='input'
          value={details.university} onChange={handleChangeEducation}
          name="university" />
      </div>

      <div className="input-group">
        <label htmlFor='skills' className='label'>Skills:</label>
        <input type="text" id='' className='input'
          value={details.skill} onChange={handleChangeEducation}
          name="skill" />
      </div>

      <div className="input-group">
        <label htmlFor='workExperience' className='label'>Work Experience:</label>
        <input type="text" id='workExperience' className='input'
          value={details.workExperience} onChange={handleChangeEducation}
          name="workExperience" />
      </div>

    </div>

  );
}
export default PersonalDetails;