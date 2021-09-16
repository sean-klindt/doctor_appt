import React from 'react'

const Patient = ({ Patient }) => {
  const { id, first_name, last_name, } = patient
  return (
    <>
    <h1>{ first_name } { last_name }</h1>
    
    <br/>
    <a href={`/patients/${id}/appointments`}>Appointments</a>
    <br/>
    <hr/>
    <a href="/">Back</a>
    </>
  )
}

export default Patient;