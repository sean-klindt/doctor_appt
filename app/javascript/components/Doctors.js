import React from 'react';

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <a href="/doctors/new">New Doctor</a>
      {
          doctors.map( (doctor) => (
            <div>
              <h5>{doctor.first_name} {doctor.last_name}</h5>
              <a href={`/doctors/${doctor.id}`}>Show</a>
              {' '}
              <a href={`/doctors/${doctor.id}/edit`}>Edit</a>
              {' '}
              <a href={`/doctors/${doctor.id}`}data-method="delete">Delete</a>
            </div>
          ))
      }
      
    </>
  )
}

export default Doctors;