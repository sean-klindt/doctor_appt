import React from 'react'
const AppointmentNew = ({ patient, appointment, doctors }) => {
  const { appt_date, appt_time, patient_id  } = appointment;
  const defaultAppt_date = appt_date ? appt_date : ""; 
  const defaultAppt_time = appt_time ? appt_time : "";
  
  const defaultPatient = patient_id ? patient_id : "";
  return (
    <>
      <h1>Add Appointment</h1>
      <form action={`/doctors/${doctor.id}/appointments`} method="post">
        <label for="patient_id">Choose a Patient:</label>
        <select name="appointment[patient_id]" id="patient_id" defaultValue={defaultPatient}>
          { patients.map((d) => (
            <option value={patient.id}>{`${patient.first_name} ${patient.last_name}`}</option>
          ))}
        </select>
        <input
          type='date'
          required
          placeholder="Appointment Date"
          defaultValue={defaultAppt_date}
          name="appointment[appt_date]"
        />
        <input
          type='time'
          required
          placeholder="Appointment Time"
          defaultValue={defaultAppt_time}
          name="appointment[appt_time]"
        />
       
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default AppointmentNew;