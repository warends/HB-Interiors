const app = angular.module('hb-interiors', ['ui.router']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/partials/home/home',
          controller: 'homeCtrl'
      })
      .state('services', {
        url: '/services',
        templateUrl: '/partials/services/services',
        controller: 'ServiceController'
      })
      .state('e-design', {
        url: '/e-design',
        templateUrl: '/partials/ed/ed',
        controller: 'eDesignCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/partials/about/about',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/partials/contact/contact',
        controller: 'contactCtrl'
      })
      .state('services.detail', {
        url: '/services/:name',
        templateUrl: '/partials/services/services-detail',
        controller: 'SelectedServiceController'
      });
}]);


app.run(['$rootScope', '$location', function($rootScope, $location){

  // $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
  //     if(rejection === 'not authorized') {
  //       $location.path('/');
  //     }
  // });

  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
    // window.scrollTo(0, 0);
  });

}]);
