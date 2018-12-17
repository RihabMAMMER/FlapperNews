angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',])
//new controller
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts', //notre service
function($scope, $stateParams, posts){

}]);
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home'); //pour rediriger des itinéraires non spécifiés.
}])
function($scope){
  $scope.test = 'Hello world!';
}]);

$scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];
