angular.module('common.inview', []).directive('inView', ['$window', ($window) => {
    return {
        restrict: 'A',
        scope: {
            viewObj: '='
        },
        link: (scope, element, attrs) => {
            angular.element($window).bind('scroll', () => {
                var $el = element[0],
                    pos = $el.getBoundingClientRect();
                if(pos.top + scope.viewObj.offset < $window.scrollY) {
                    scope.viewObj.visible = true;
                    console.log('in view :' + scope.viewObj.visible);
                } else {
                    scope.viewObj.visible = false;
                }
                scope.$apply();
            });
        }

    };
}]);
