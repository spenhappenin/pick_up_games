10.times do 
	@user = User.create(username: Faker::Internet.user_name,
										first_name: Faker::Name.first_name,
										last_name: Faker::Name.last_name,
										dob: Faker::Date.between(1000.days.ago, Date.today),
										phone_number: Faker::PhoneNumber.cell_phone,
										favorite: ['basketball', 'soccer', 'football', 'golf'].sample,
										email: Faker::Internet.email,
										password: 'password')
puts 'Users Seeded!'
	3.times do 
		@user.events.create(name: Faker::App.name,
														sport: Faker::Team.sport,
														date: Faker::Date.forward(23),
														time: Time.now,
														capacity: Faker::Number.between(2, 30),
														venue: Faker::Book.title,
														street: Faker::Address.street_address,
														city: Faker::Address.city,
														state: Faker::Address.state,
														zip: Faker::Address.zip,
														skill_level: ['Open', 'AA', 'A', 'B', 'Novice', 'Everyone'].sample,
														description: Faker::Lorem.paragraph)
puts 'Events Seeded!'
	end
end









































>>>>>>> alt landing updated



