angular.module('hb-interiors', ['ngResource', 'ui.router']);

angular.module('hb-interiors').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/partials/home/home',
        controller: 'homeCtrl'
    });

}]);


angular.module('hb-interiors').run(['$rootScope', '$location', function($rootScope, $location){

  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
      if(rejection === 'not authorized') {
        $location.path('/');
      }
  });

  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
    window.scrollTo(0, 0);
  });

}]);
