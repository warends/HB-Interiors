angular.module('ed.controller', []).controller('EDesignController', ['$scope', '$http', 'QFactory', ($scope, $http, QFactory) => {
    window.scrollTo(0, 0);

    $scope.qShow = false;
    $scope.toggleQForm = () => {
        $scope.qShow = !$scope.qShow;
    }

    $scope.formData = {};
    $scope.questions = QFactory.list();
    $scope.currentQuestion = 0;

    $scope.setCurrentQuestion = (index) => {
        $scope.currentQuestion = index;
    }

    $scope.isCurrentQIndex = (index) => {
        return $scope.currentQuestion === index;
    }

    $scope.nextQ = () => {
        console.log($scope.questions.length);
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
        console.log($scope.currentQuestion);

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


}]);
