app.controller('homeCtrl', ['$scope', 'ServiceFactory', function($scope, ServiceFactory){

  $scope.services = ServiceFactory.list();


}]);
