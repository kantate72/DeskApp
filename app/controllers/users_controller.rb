class UsersController < ApplicationController
  def new
    @user = User.new
  end
  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      if signed_in?
        redirect_to :controller => 'quizzes', :action => 'new'
      else
        render 'new'
      end
    else
      render 'new'
    end
  end
end
