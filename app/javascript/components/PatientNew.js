import React from 'react'

const PatientNew = ({ user }) => {
  const { id, first_name, last_name, } = patient
  const defaultFirstName = first_name ? first_name : ''
  const defaultLastName = last_name ? last_name : ''
  
  return (
    <>
      <h1>New Patient Form</h1>
      <form action="/patients" method="post">
        <input 
          type="text" 
          defaultValue={defaultFirstName}
          name="patient[first_name]"
          required
          placeholder="First Name"
        />
        <input
          type="text" 
          defaultValue={defaultLastName}
          name="patient[last_name]"
          required
          placeholder="Last Name"
        />
        
        
        <button type='submit'>Add Patient</button>
      </form>
    </>
  )
}

export default PatientNew;