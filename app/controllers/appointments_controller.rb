class AppointmentsController < ApplicationController

  before_action :set_parent

  def index
    @appointment = @doctor.appointments
    render component: 'Appointments', props: {appointments: @appointments, doctor: @doctor}
  end

  def show
    @appointment = @doctor.appointments.find(params[:id])
    render component: 'Appointment', props: {appointment: @appointment, doctor: @doctor}
  end

  def new
    @appointment = @doctor.appointments.new
    render component: 'AppointmentNew', props: {appointment: @appointment, doctor: @doctor}
  end

  def create
    @appointment = @doctor.appointments.new(doctor_params)
    if @appointment.save
      redirect_to root_path
    else
      render component: 'AppointmentNew', props: {appointment: @appointment, doctor: @doctor}
    end
  end

  def edit
    @appointment = @doctor.appointments.find(params[:id])
    render component: 'AppointmentEdit', props: {appointment: @appointment, doctor: @doctor}
  end

  def update
    @appointment = @doctor.appointments.find(params[:id])
    if @appointment.update(doctor_params)
      redirect_to root_path
    else
      render component: 'AppointmentEdit', props: {appointment: @appointment, doctor: @doctor}
    end
  end

  def destroy
    @appointment = @doctor.appointment.find(params[:id])
    @appointment.destroy
    redirect_to root_path
  end

  private
  def appointment_params
    params.require(:appointment.permit(:appt_date, :appt_time))
  end

  def set_parent
    @doctor = Doctor.find(params[:doctor_id])
  end
end
