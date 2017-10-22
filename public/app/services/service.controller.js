angular.module('service.controller', []).controller('ServiceController', ['$scope', '$stateParams', 'ServiceFactory', 'Meta', ($scope, $stateParams, ServiceFactory, Meta) => {

    Meta.setTitle('Services');

    $scope.services = ServiceFactory.list();
}]);

angular.module('service.detail.controller', []).controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
  $scope.selectedService = ServiceFactory.find($stateParams.slug);
  $scope.branding = false;
  if($scope.selectedService.name === 'Branding'){
      $scope.branding = true;
  } else {
      $scope.branding = false;
  }
  $scope.book1Show = false;
  // console.log($scope.selectedService.name);
}]);
