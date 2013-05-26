class QuizzesController < ApplicationController
  def new
    @quiz = Quiz.new
    @question = '1'
  end
  
  def create
    user.quizzes.create(user_id = user.id)
    render :action => "show", :question=> 1
  end
  
  def edit
  end
  
  def show
  end
end
