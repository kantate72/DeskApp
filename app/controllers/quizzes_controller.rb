class QuizzesController < ApplicationController
  def new
    @quiz = Quiz.new
  end
  
  def create
    @quiz = Quiz.new(params[:user])
    @quiz.save
    if @quiz.save
      redirect_to :action => "edit", :question=> 1
    else
      redirect_to 'edit'
    end
  end
  
  def edit
  end
  
  def show
    render :json => Quiz.question
  end
end
