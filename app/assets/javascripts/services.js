angular.module('quiz.services', ['ngResource']);

angular.module('quiz.services', ['ngResource']).factory('SaveQuiz', function($resource) {
  var SaveQuizService = $resource('/quizzes', {}, {
    'create': { method: 'POST' },
    'index': { method: 'GET', isArray: true },
    'update': { method: 'PUT' },
    'destroy': { method: 'DELETE' }
  });
  return SaveQuizService;
});