angular.module('service.controller', []).controller('ServiceController', ['$scope', '$stateParams', 'ServiceFactory', 'Meta', ($scope, $stateParams, ServiceFactory, Meta) => {

    Meta.setTitle('Services');
    $scope.services = ServiceFactory.list();

}]);

angular.module('service.detail.controller', []).controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', ($scope, $stateParams, ServiceFactory) => {
    
    $scope.selectedService = ServiceFactory.find($stateParams.slug);
    $scope.branding = false;
    $scope.branding = ($scope.selectedService.name === 'Branding') ? true : false;

    $scope.bookShow = false;
    $scope.toggleBook = function(){
      $scope.bookShow = true;
    }

    $scope.nextPage = function(){
      $('.active')
        .removeClass('active')
        .addClass('flipped')
        .next('.page')
        .addClass('active')
        .siblings();
    }

    $scope.prevPage = function(){
      $('.flipped')
        .last()
        .removeClass('flipped')
        .addClass('active')
        .siblings('.page')
        .removeClass('active');
    }

    $scope.currentPage = 0;


}]);
