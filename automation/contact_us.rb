require 'selenium-webdriver'

# ===============================
# |         Contact Us           |
# ===============================
# Contact Us button
contact_us_navigate = driver.find_element(:link_text, 'Contact')
contact_us_navigate.click
# Add name to contact us
contact_us_name = driver.find_element(:class, 'name-box')
contact_us_name.send_keys 'Owen Quigley'
# Add email to contact us
contact_us_email = driver.find_element(:class, 'email-box')
contact_us_email.send_keys 'test@test.com'
#Add comment to contact us
contact_us_comment = driver.find_element(:xpath, "//textarea[@placeholder='Write Message Here...']")
contact_us_comment.send_keys("What the jiminy crickets did you just flaming say about me, you little bozo? I’ll have you know I graduated top of my class in the Cub Scouts, and I’ve been involved in numerous secret camping trips in Wyoming, and I have over 300 confirmed knots. I am trained in first aid and I’m the top bandager in the entire US Boy Scouts (of America). You are nothing to me but just another friendly face. I will clean your wounds for you with precision the likes of which has never been seen before on this annual trip, mark my words. You think you can get away with saying those shenanigans to me over the Internet? Think again, finkle. As we speak I am contacting my secret network of MSN friends across the USA and your IP is being traced right now so you better prepare for the seminars, man. The storm that wipes out the pathetic little thing you call your bake sale. You’re frigging done, kid. I can be anywhere, anytime, and I can tie knots in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in road safety, but I have access to the entire manual of the United States Boy Scouts (of America) and I will use it to its full extent to train your miserable butt on the facts of the continents, you little schmuck. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your silly tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goshdarned sillyhead. I will throw leaves all over you and you will dance in them. You’re friggin done, kiddo.")

sleep 2
