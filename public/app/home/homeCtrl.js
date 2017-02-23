app.controller('homeCtrl', ['$scope', function($scope){
  console.log('working!');

  $scope.buttonClick = () => {
    console.log('button cliked!');
  };


}]);
