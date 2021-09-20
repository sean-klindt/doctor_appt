class AppointmentsController < ApplicationController

  before_action :set_doctor

  def index
    @appointments = @doctor.appointments
    render component: 'Appointments', props: {doctor: @doctor, appointments: @appointments}
  end

  def show
    @appointment = @doctor.appointments.find(params[:id])
    render component: 'Appointment', props: {doctor: @doctor, appointment: @appointment}
  end

  def new
    @appointment = @doctor.appointments.new
    render component: 'AppointmentNew', props: {doctor: @doctor, appointment: @appointment}
  end

  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointment_path
    else
      render component: 'AppointmentNew', props: {doctor: @doctor, appointment: @appointment}
    end
  end

  def edit
    @appointment = @doctor.appointments.find(params[:id])
    render component: 'AppointmentEdit', props: {doctor: @doctor, appointment: @appointment}
  end

  def update
    @appointment = @doctor.appointments.find(params[:id])
    if @appointment.update(appointment_params)
      redirect_to doctor_appointment_path
    else
      render component: 'AppointmentEdit', props: {doctor: @doctor, appointment: @appointment}
    end
  end

  def destroy
    @doctor.appointments.find(params[:id]).destroy
    
    redirect_to doctor_appointment_path
  end

  private
  def appointment_params
    params.require(:appointment.permit(:appt_date, :appt_time))
  end

  def set_doctor
    @doctor = Doctor.find(params[:doctor_id])
  end
end
