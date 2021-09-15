import React from 'react'

const Doctor = ({ doctor }) => {
  const { id, first_name, last_name, specialty } = doctor
  return (
    <>
    <h1>{ first_name } { last_name }</h1>
    <h3>{ specialty }</h3>
    <br/>
    <a href={`/doctors/${id}/appointments`}>Appointments</a>
    <br/>
    <hr/>
    <a href="/">Back</a>
    </>
  )
}

export default Doctor;