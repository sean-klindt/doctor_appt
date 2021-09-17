import React from 'react'

const DoctorNew = ({ doctor }) => {
  const { first_name, last_name, specialty } = doctor
  const defaultFirstName = first_name ? first_name : ''
  const defaultLastName = last_name ? last_name : ''
  const defaultSpecialty = specialty ? specialty : ''
  return (
    <>
      <h1>New Doctor Form</h1>
      <form action="/doctors" method="post">
        <input 
          type="text" 
          defaultValue={defaultFirstName}
          name="doctor[first_name]"
          required
          placeholder="First Name"
        />
        <input
          type="text" 
          defaultValue={defaultLastName}
          name="doctor[last_name]"
          required
          placeholder="Last name"
        />
        <input
          type="text" 
          defaultValue={defaultSpecialty}
          name="doctor[specialty]"
          required
          placeholder="Specialty"
        />
        
        <button type='submit'>Add Doctor</button>
      </form>
    </>
  )
}

export default DoctorNew;