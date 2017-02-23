


const app = angular.module('hb-interiors', ['ui.router']);


app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) =>{

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/partials/home/home',
          controller: 'homeCtrl'
      });
}]);
