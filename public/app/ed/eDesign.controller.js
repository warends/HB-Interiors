angular.module('ed.controller', []).controller('EDesignController', ['$scope', '$http', 'QFactory', ($scope, $http, QFactory) => {
    window.scrollTo(0, 0);

    $scope.qShow = false;
    $scope.toggleQForm = () => {
        $scope.qShow = !$scope.qShow;
    }

    $scope.formData = {};
    $scope.radio = '';
    //console.log($scope.radio);
    $scope.questions = QFactory.list();
    $scope.currentQuestion = 0;

    $scope.isCurrentQIndex = (index) => {
        return $scope.currentQuestion === index;
    }

    $scope.nextQ = () => {
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
    }

    $scope.prevQ = () => {
        $scope.currentQuestion = ($scope.currentQuestion > 0) ? --$scope.currentQuestion : $scope.questions.length -1;
    }

    $scope.submitQuestionaire = () => {
        console.log($scope.formData);
        $http.post('/questionaire-form', $scope.formData)
            .then((response) => {
                console.log(response.data);
            }, (err) => {
                console.log('There was a problem submitting your form ' + err);
            });
    }

    $scope.mySplit = function(string, nb) {
        var array = string.split('-');
        if(array[nb+1] === undefined){
            return array[nb];
        } else {
            return array[nb] + ' ' + array[nb+1];
        }
    }


}]);
