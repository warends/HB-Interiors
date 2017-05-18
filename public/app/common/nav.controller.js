angular.module('common.nav', []).controller('NavController', ['$scope', function($scope){

    $scope.contactShow = false;
    $scope.toggleContact = () => {
        console.log('contact');
        $scope.contactShow = true;
    }

    // $scope.qShow = false;
    // $scope.toggleQForm = function(){
    //     $scope.qShow = !$scope.qShow;
    // }
}]);
