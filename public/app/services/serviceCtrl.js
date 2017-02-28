app.controller('ServiceController', ['$scope', 'ServiceFactory', ($scope, ServiceFactory) => {
    $scope.services = ServiceFactory.list();
}]);

app.controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
  $scope.selectedService = ServiceFactory.find($stateParams.name);
}]);
