class Day < ActiveRecord::Base
  belongs_to :user

  validates :rating, :date
  
end
