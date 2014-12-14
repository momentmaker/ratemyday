class Day < ActiveRecord::Base
  belongs_to :user

  validates :rating, presence: true

  validates_date :date, is_at: Date.current
  validates_time :date, on_or_after: '8:00pm', on_or_after_message: 'must be at the end of your day'
end
