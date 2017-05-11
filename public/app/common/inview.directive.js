angular.module('common.inview', []).directive('inView', ['$window', ($window) => {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            angular.element($window).bind('scroll', () => {
                var $el = element[0],
                    pos = $el.getBoundingClientRect(),
                    offset = 0;
                if(pos.top + offset < $window.scrollY) {
                    scope.view = true;
                    console.log('in view :' + scope.view);
                } else {
                    scope.view = false;
                }
                scope.$apply();
            });
        }

    };
}]);
