class Day < ActiveRecord::Base
  belongs_to :user

  validates :rating, presence: true

  validates_date :date, is_at: Date.current
end
