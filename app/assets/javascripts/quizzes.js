angular.module('Quiz', ['ngResource']).
    run(function() {
    // This is effectively part of the main method initialization code
    });
    
function QuizCtrl($scope, $resource) {
    var step = 0;
    savedAnswers = [];
    $scope.radios = {selected: 'X'};
    Question = $resource('/quizzes/show');
    questions = Question.query(function(){
        $scope.question = questions[step].question;
        $scope.answers = questions[step].answers;
        $scope.answers = ansArray();
        removeExtras();
        
    });
    $scope.nextStep = function() {
        step++;
        $scope.question = questions[step].question;
        saveAnswer(step);
        $scope.answers = ansArray();
        removeExtras();
        
    };
    saveAnswer = function(step){
        var radios = $scope.radios.selected
        angular.forEach(radios, function(radios) {
            if (radios) {
                savedAnswers.push(radios);
            }
        });
        
    };
    answersCount = function(step) {
        var count = 0;
        var answers = questions[step].answers;
        angular.forEach(answers, function(answers){
            count ++;
        });
        return count; 
    };
    ansArray = function(){
        answers = [
            {text:questions[step].answers[0], value:"A"},
            {text:questions[step].answers[1], value:"B"},
            {text:questions[step].answers[2], value:"C"},
            {text:questions[step].answers[3], value:"D"},
            {text:questions[step].answers[4], value:"E"},
            {text:questions[step].answers[5], value:"F"}
        ];
        return answers;
    }
    removeExtras = function(){
        count = answersCount(step)+4;
        for (i=count;i<10;i++) {
            var index=$scope.answers.indexOf($scope.answers[i])
            $scope.answers.splice(index);
        }
    }
    
}
