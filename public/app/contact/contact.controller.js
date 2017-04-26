angular.module('contact.controller', []).controller('ContactController', ['$scope', '$http', ($scope, $http) => {

    $scope.form = {};

    $scope.sendMail = function(){
         var data =({
           contactName : this.contactName,
           contactCompany : this.contactCompany,
           contactEmail : this.contactEmail,
           contactMessage : this.contactMessage
         });

         $http.post('/contact-form', data)
           .then(function(message, status, headers, config){
             notifier.notify('Thank you for your message ' + message.data.contactName);
                $scope.form.contactForm.$setPristine();
                $scope.form.contactForm.$setUntouched();
           }, function(message, status, headers, config){
             notifier.notify('There was an error processing your request. Please try again');
           });
           this.contactName = null;
           this.contactCompany = null;
           this.contactEmail = null;
           this.contactMessage = null;
       }

}]);
