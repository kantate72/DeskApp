class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  # Force signout to prevent CSRF attacks
  def handle_unverified_request
    sign_out
    super
  end
  
  def current_user
    @current_user ||= User.limit(1).where('id = ?', session[:id])
  end
end
