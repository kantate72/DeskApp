angular.module('quiz', ['ngResource', 'quiz.services']);


function SessionCtrl($scope) {
    $scope.destroy = function(id) {
        alert("test");
        document.cookie = 'remeafasdfmber_token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
}