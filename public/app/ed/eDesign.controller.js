angular.module('ed.controller', []).controller('EDesignController', ['$scope', '$http', 'QFactory', ($scope, $http, QFactory) => {
    window.scrollTo(0, 0);

    $scope.colorList = [];
    $scope.colorNoList = [];
    $scope.drawnToList = [];
    $scope.furnitureList = [];
    $scope.formData= {};
    function addToList(answer, list){
        var index = list.indexOf(answer);
        if(index > -1){
            list.splice(index, 1);
        } else {
            list.push(answer);
        }
        console.log(list);
    }
    $scope.toggleColor = function(answer, question){
        if(question == 'q2'){
            addToList(answer, $scope.drawnToList);
        } else if(question == 'q3'){
            addToList(answer, $scope.furnitureList);
        } else if(question == 'q5'){
            addToList(answer, $scope.colorList);
        } else {
            addToList(answer, $scope.colorNoList);
        }
    }

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

        var data = {
            q1: $scope.questions[0].response,
            q2: $scope.drawnToList,
            q3: $scope.furnitureList,
            q4: $scope.questions[3].response,
            q4: $scope.colorList,
            q5: $scope.colorNoList,
            name: $scope.formData.name,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
            note: $scope.formData.note
        }
        console.log(data);

        $http.post('/questionaire-form', data)
            .then((response) => {
                console.log(response.data);
            }, (err) => {
                console.log('There was a problem submitting your form ' + err);
            });
    }

    $scope.mySplit = function(string, i) {
        var array = string.split('-');
        if(array[i+1] === undefined){
            return array[i];
        } else if(array[i+2] === undefined){
            return array[i] + ' ' + array[i+1];
        } else {
            return array[i] + ' ' + array[i+1] + ' ' + array[i+2];
        }
    }


}]);
