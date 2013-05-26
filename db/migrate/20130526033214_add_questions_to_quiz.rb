class AddQuestionsToQuiz < ActiveRecord::Migration
  def change
    add_column :quizzes, :q1, :string
    add_column :quizzes, :q2, :string
    add_column :quizzes, :q3, :string
    add_column :quizzes, :q4, :string
    add_column :quizzes, :q5, :string
    add_column :quizzes, :score, :string
  end
end
