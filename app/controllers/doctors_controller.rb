class DoctorsController < ApplicationController
  def index
    @doctors = Doctor.all
    render component: 'Doctors', props: {doctors: @doctors}
  end

  def show
    @doctor = Doctor.find(params[:id])
    render component: 'Doctor', props: {doctor: @doctor, courses: @doctor.courses}
  end

  def new
    @doctor = Doctor.new
    render component: 'DoctorNew', props: {doctor: @doctor}
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to root_path
    else
      render component: 'DoctorNew', props: {doctor: @doctor}
    end
  end

  def edit
    @doctor = Doctor.find(params[:id])
    render component: 'DoctorEdit', props: {doctor: @doctor}
  end

  def update
    @doctor = Doctor.find(params[:id])
    if @doctor.update(doctor_params)
      redirect_to root_path
    else
      render component: 'DoctorEdit', props: {doctor: @doctor}
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])
    @doctor.destroy
    redirect_to root_path
  end

  private
  def doctor_params
    params.require(:doctor.permit(:first_name, :last_name, :specialty))
  end
end
