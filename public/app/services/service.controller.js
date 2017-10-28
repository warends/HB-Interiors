angular.module('service.controller', []).controller('ServiceController', ['$scope', '$stateParams', 'ServiceFactory', 'Meta', ($scope, $stateParams, ServiceFactory, Meta) => {

    Meta.setTitle('Services');

    $scope.services = ServiceFactory.list();
}]);

angular.module('service.detail.controller', []).controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
  $scope.selectedService = ServiceFactory.find($stateParams.slug);
  $scope.branding = false;
  $scope.branding = ($scope.selectedService.name === 'Branding') ? true : false;

  $scope.bookShow = false;
  $scope.rotate = false;

  $scope.toggleBook = function(){
      console.log('toggle');
      $scope.bookShow = true;
  }

  $scope.nextPage = function(){
      $scope.rotate = !$scope.rotate;
  }


}]);
