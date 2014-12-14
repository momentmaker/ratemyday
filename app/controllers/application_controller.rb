class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :user_signed_in?, :current_user, :same_user?, :authenticate!

  protected

  def user_signed_in?
    !current_user.nil?
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def set_current_user(user)
    @current_user = user
  end

  def same_user?(user)
    user.user_id == current_user.id
  end

  def authenticate!
    unless user_signed_in?
      flash[:alert] = 'You need to sign in if you want to do that!'

      redirect_to root_path
    end
  end

  def all_days_data(days)
    data = []
    days.each do |day|
      data << [(day.date.to_time.to_i.to_s + "000").to_i - 18000000, day.rating]
      # data << [day.date.to_time.to_i, day.rating]
      # binding.pry
    end
    data
  end
end
