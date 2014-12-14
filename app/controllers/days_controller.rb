class DaysController < ApplicationController
  before_action :authenticate!, only: [:create]

  def index
    @days = Day.all.order(:date).where(user_id: current_user)
    @chart_data = all_days_data(@days)
    gon.linechart_data = @chart_data
  end

  def create
    @day = current_user.days.build(day_params)
    @day.date = Date.today
    @day.save

    render :json => @day
  end

  private
  def day_params
    params.require(:day).permit(:rating)
  end
end
