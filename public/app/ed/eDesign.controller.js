angular.module('ed.controller', []).controller('EDesignController', ['$scope', '$http', ($scope, $http) => {
    window.scrollTo(0, 0);

    $scope.qShow = false;
    $scope.toggleQForm = function(){
        $scope.qShow = !$scope.qShow;
    }

    $scope.formData = {};

    $scope.submitQuestionaire = function(){
        console.log($scope.formData);
        $http.post('/questionaire-form', $scope.formData)
            .then((response) => {
                console.log(response.data);
            }, (err) => {
                console.log('There was a problem submitting your form ' + err);
            });
    }


}]);
