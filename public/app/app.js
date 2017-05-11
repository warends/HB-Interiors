const app = angular.module('hb-interiors', ['home', 'services', 'common', 'ed.controller', 'contact.controller', 'about.controller', 'ui.router', 'ngScrollReveal']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/partials/home/home',
          controller: 'HomeController'
      })
      .state('services', {
          url: '/services',
          templateUrl: '/partials/services/services',
          controller: 'ServiceController'
      })
      .state('e-design', {
          url: '/e-design',
          templateUrl: '/partials/ed/ed',
          controller: 'EDesignController'
      })
      .state('about', {
          url: '/about',
          templateUrl: '/partials/about/about',
          controller: 'AboutController'
      })
      .state('contact', {
          url: '/contact',
          templateUrl: '/partials/contact/contact',
          controller: 'ContactController'
      })
      .state('services.detail', {
          url: '/:slug',
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

  });

}]);
