class CreateSportEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :sport_events do |t|

      t.timestamps
    end
  end
end
