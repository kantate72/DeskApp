class QuizzesController < ApplicationController
  
  def new
    @quiz = Quiz.new
  end
  
  def create
    @quiz = Quiz.new(params[:quiz])
    if @quiz.save
    respond_to do |format|
      format.json{render :json => @quiz}
    end
  end
  end
  
  def edit
  end
  
  def show
    render :json => Quiz.question
  end
end
