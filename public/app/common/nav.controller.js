angular.module('common.nav', []).controller('NavController', ['$scope', '$http', 'NotifierService', function($scope, $http, notifier){

    $scope.contactShow = false;
    $scope.toggleContact = () => {
        $scope.contactShow = !$scope.contactShow;
    }

    $scope.formData = {};

    $scope.sendContact = function(){
        console.log($scope.formData);
         $http.post('/contact-form', $scope.formData)
           .then(function(message, status, headers, config){
             notifier.notify('Thank you for your message ' + message.data.contactName);
                //$scope.formData.$setPristine();
                //$scope.formData.$setUntouched();
           }, function(message, status, headers, config){
             notifier.notify('There was an error processing your request. Please try again');
           });
    }

    $scope.selected = false;
    $scope.toggleMenu = function(){
        $scope.selected = !$scope.selected;
    }

}]);
