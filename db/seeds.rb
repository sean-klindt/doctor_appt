# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@appt_times = ["6:00am", "6:30am", "7:00am", "7:30am", "8:00am", "8:30am",
"9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "1:30pm", "2:00pm",
"2:30pm", "3:00pm"]

5.times do
  doctor = Doctor.create(
    first_name: Faker::Name.name,
    last_name: Faker::FunnyName.name,
    specialty: Faker::Educator.degree
  )
  5.times do
    patient = Patient.create(
      first_name: Faker::Name.name,
      last_name: Faker::Name.last_name
    )
    5.times do
      appointment = doctor.appointments.create(
        appt_date: Faker::Date.forward(days: 90),
        appt_time: @appt_times.sample,
        patient_id: patient.id
      )
    end
  end
end


puts "data seeded"