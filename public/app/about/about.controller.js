angular.module('about.controller', []).controller('AboutController', ['$scope', ($scope) => {

  $scope.isActive = false;
  $scope.minusSign = false;
  $scope.expandBio = () => {
      $scope.minusSign = !$scope.minusSign;
      $scope.isActive = !$scope.isActive;
  };

}]);
