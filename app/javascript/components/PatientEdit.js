import React from 'react'

const PatientEdit = ({ patient }) => {
const { id, first_name, last_name, } = patient
const defaultFirstName = first_name ? first_name : ''
const defaultLastName = last_name ? last_name : ''

return (
  <>
    <h1>Edit User</h1>
    <h3>{ first_name } { last_name }</h3>
    

    <form action={`/patients/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="first name" 
        type="text"
        name="patient[first_name]"
        defaultValue={defaultFirstName}
        />
        <input 
          placeholder="last name"
          type="text"
          name="patient[last_name]"
          defaultValue={defaultLastName}
        />
        
        <button type='submit'>Update Patient</button>
    </form>
  </>
)
}

export default PatientEdit;