
app.directive('boxHeight', ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: 'A',
        link: (scope, elem, attrs) => {
          $timeout(() => {
            scope.newHeight = elem.height();
          }, 50);
          angular.element($window).bind('resize', () => {
            scope.$apply(() => {
              scope.newHeight = elem.height();
            });
          });
        }
    };
}]);

app.directive('targetHeight', function(){
  return {
    restrict: 'A',
    link: (scope, elem, attrs) => {
      scope.$watch('newHeight', (newV, oldV) => {
        //console.log('old value ' + oldV, 'new value ' + newV);
        elem.attr('style', 'height: ' + newV + 'px');
      })
    }
  }
});
