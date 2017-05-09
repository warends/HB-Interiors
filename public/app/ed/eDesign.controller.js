angular.module('ed.controller', []).controller('EDesignController', ['$scope', ($scope) => {
    window.scrollTo(0, 0);

    $scope.qShow = false;
    $scope.toggleQForm = function(){
        $scope.qShow = !$scope.qShow;
    }

    $scope.submitQuestionaire = function(){
        console.log('form submitted');
    }
}]);
