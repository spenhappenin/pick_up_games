class SignupMailer < ApplicationMailer
  default from: ENV['MAIL_FROM']

  def new_signup(user)
    @user = user
    mail(to: @user.email, subject: "Thank you for signing up #{@user.first_name}!")
  end
end
