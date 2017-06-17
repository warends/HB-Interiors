angular.module('common.nav', []).controller('NavController', ['$scope', '$http', '$window', 'NotifierService', 'ContactService', function($scope, $http, $window, notifier, ContactService){

    $scope.toggleContact = () => {
        //ContactService.toggleContact()
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

    $scope.socialShow = false;
    if($window.innerWidth < 992){
        console.log($window.innerWidth);
        angular.element($window).bind('scroll', () => {
            if($window.scrollY > 140){
                console.log($scope.socialShow);
                $scope.socialShow = true;
            } else {
                $scope.socialShow = false;
            }
        });
    }

}]);
