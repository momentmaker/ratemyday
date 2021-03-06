class DaysController < ApplicationController
  before_action :authenticate!, only: [:create]

  def index
    @days = Day.all.order(:date).where(user_id: current_user)
    @line_data = all_days_data(@days)
    @pie_data = day_ratings_avg_data(@days)
    gon.linechart_data = @line_data
    gon.piechart_data= @pie_data
    @already_submitted = check_today_submission(@days)
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
