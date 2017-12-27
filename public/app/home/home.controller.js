angular.module('home.controller', []).controller('HomeController', ['$scope', '$window', 'ServiceFactory', 'Meta', function($scope, $window, ServiceFactory, Meta){

    Meta.setTitle('Home');
    //Meta.setDesc('This is the desc');

    $scope.screenW = $window.innerWidth;

  $scope.services = ServiceFactory.list();

  $scope.welcome = {
      visible: false,
      offset: -200
  };

  $scope.options = {
       origin: 'left',
       distance: '150px',
       easing: 'ease-in-out',
       delay: 30,
       scale: 1,
       duration: 1000,
       // reset: true,
    //    afterReveal: function (domEl) {
    //        document.getElementById("gallery").style.visibility = "visible";
    //    },
       sequence: {
          selector: '.col-md-5',
          interval: 300
        }
    };

}]);
