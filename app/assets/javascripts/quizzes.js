angular.module('Quiz', ['ngResource']).
    run(function() {
    // This is effectively part of the main method initialization code
    });
    
function QuizCtrl($scope, $resource) {
    Question = $resource('/quizzes/show');
    questions = Question.query(function(){
        $scope.question = questions[0].question
        $scope.answers = questions[0].answers;
    });
    
}
