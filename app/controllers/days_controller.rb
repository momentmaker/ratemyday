class DaysController < ApplicationController
  before_action :authenticate!, only: [:create]

  def index
    @days = Day.all
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
