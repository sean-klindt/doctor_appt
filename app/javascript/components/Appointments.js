import React from 'react'

const Appointments = ({ patient, doctors }) => {
  const displayDoc = (id) => {
    let fullName
    doctors.map((d) => {
      if (patient.id === id) {
        fullName = patient.first_name + " " + patient.last_name
      }
    })
    return fullName
  }
  return (
    <>
      <h1>{doctor.first_name} {doctor.last_name}'s Appointments</h1>
      <a href={`/doctors/${doctor.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Patients</h2>
      { patients.map((d) => (
        <div>
          <p>{displayDoc(patient.id)}</p>
          <a href={`/doctors/${doctor.id}/appointments/${patient.id}`} data-method="delete">
            Delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Appointments;












