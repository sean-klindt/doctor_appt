import React from 'react';

const AppointmentEdit = ({ appointment }) => {
  const {first_name, last_name, id } = doctor
	const defaultFirstName = first_name ? first_name : ""
	const defaultLastName = last_name ? last_name : ""
  return (
    <>
      <h1>Edit an Appointment</h1>
      <form action={`/doctors/${id}`} method="post">
        {/* important hidden field to be able to edit */}
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          defaultValue={defaultFirstName}
          name="doctor[first_name]"
        />
				<input
          type="text"
          defaultValue={defaultLastName}
          name="doctor[last_name]"
					/>
        <button type="submit">Update</button>
      </form>
    </>
  )
}
export default AppointmentEdit;