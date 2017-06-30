angular.module('service.controller', []).controller('ServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
    $scope.services = ServiceFactory.list();
}]);

angular.module('service.detail.controller', []).controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
  $scope.selectedService = ServiceFactory.find($stateParams.slug);
  console.log($scope.selectedService);
}]);
