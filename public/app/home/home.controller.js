angular.module('home.controller', []).controller('HomeController', ['$scope', 'ServiceFactory', function($scope, ServiceFactory){

  $scope.services = ServiceFactory.list();


}]);
