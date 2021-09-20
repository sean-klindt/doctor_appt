import React from "react";

const Appointment = ({ appointment }) => {  
  const { appt_date, appt_time, id } = appointment;  
  return (    
  <>      <h1>        {appt_date}        {appt_time}      </h1>      
  <hr />      <h2>visit:</h2>          <br />      
  <a href={`/doctors/${id}/appointments`}>Back to Appointments</a>    
  </>  );
  };
  
  export default Appointment;