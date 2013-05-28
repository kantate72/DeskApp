angular.module('quiz', ['ngResource', 'quiz.services']).
    run(function() {
    // This is effectively part of the main method initialization code
    });

angular.module('quiz', ['ngResource']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/SaveQuiz', {template: 'views/quizzes/new.html.erb',   controller: QuizCtrl}).
      otherwise({redirectTo: '/quizzes/new'});
}]);
    
function QuizCtrl($scope, $resource, SaveQuiz) {
    var step = 0;
    savedAnswers = [];
    //set an initial value for selected radio buttons to check if none selected
    $scope.radios = {selected: 'X'};
    //get number for question based on step
    $scope.questionNum = function(){
        questionNumber = step+1;
        return questionNumber;
    }
    
    //get questions --load all questions and answers, and then parse them out later--this should be moved to the services
    Question = $resource('/quizzes/show');
    questions = Question.query(function(){
        //get current question
        $scope.question = questions[step].question;
        //get current answers
        $scope.answers = questions[step].answers;
        //add values to answers --A,B,C,D.
        $scope.answers = ansArray();
        //remove extra, empty values.. this should probably be refactored later
        removeExtras();
    });
    
    //evaluate answers, do error handling, and post answers to server
    $scope.nextStep = function() {
        //error handling
        if ($scope.radios.selected == "X") {
           $scope.alert = "Please select an answer before continuing."
           return false;
        }
        //reset alert to blank if function passes
        if($scope.alert != "") {
            $scope.alert = ""
        }
        //advance to next step
        step++;
        //load new question
        $scope.question = questions[step].question;
        //save answer to array
        saveAnswer(step);
        $scope.answers = ansArray();
        removeExtras();
        //push answers to server
        var postQuiz = new SaveQuiz(
            {quiz:
                {
                    q1: savedAnswers
                }
            });
        postQuiz.$create()
    };
    //add answers to array
    saveAnswer = function(step){
        var radios = $scope.radios.selected
        angular.forEach(radios, function(radios) {
            if (radios) {
                savedAnswers.push(radios);
            }
        });
        
    };
    //get how many answers there are in the current step
    answersCount = function(step) {
        var count = 0;
        var answers = questions[step].answers;
        angular.forEach(answers, function(answers){
            count ++;
        });
        return count; 
    };
    //add values to each answer here. Keeps the model data generic and reusable. could be refactored into a loop
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
    //the above function always loads six answers.. get how many there should be and remove the extras. again, could be refactored
    removeExtras = function(){
        count = answersCount(step)+4;
        for (i=count;i<10;i++) {
            var index=$scope.answers.indexOf($scope.answers[i])
            $scope.answers.splice(index);
        }
    }
    
}
