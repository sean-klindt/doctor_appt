import React from 'react'

const DoctorEdit = ({ doctor }) => {
const { id, first_name, last_name, specialty } = doctor
const defaultFirstName = first_name ? first_name : ''
const defaultLastName = last_name ? last_name : ''
const defaultSpecialty = specialty ? specialty : ''
return (
  <>
    <h1>Edit User</h1>
    <h3>{ first_name } { last_name }</h3>
    <h3>{ specialty }</h3>

    <form action={`/users/${id}`} method="post">
    <input type="hidden" name="_method" value="patch" />
      <input 
        placeholder="first name" 
        type="text"
        name="doctor[first_name]"
        defaultValue={defaultFirstName}
        />
        <input 
          placeholder="last name"
          type="text"
          name="doctor[last_name]"
          defaultValue={defaultLastName}
        />
        <input 
          placeholder="specialty"
          type="text"
          name="doctor[specialty]"
          defaultValue={defaultSpecialty}
        />
        <button type='submit'>Update User</button>
    </form>
  </>
)
}

export default UserEdit;