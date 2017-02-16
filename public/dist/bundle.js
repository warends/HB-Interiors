webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _homeCtrl = __webpack_require__(8);

var _homeCtrl2 = _interopRequireDefault(_homeCtrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = angular.module('hb-interiors.home', []).controller('homeCtrl', _homeCtrl2.default).name;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// angular.module('hb-interiors').controller('homeCtrl', ['$scope', function($scope){
//   console.log('Home Ctrl');
// }]);

var homeCtrl = function homeCtrl() {
  _classCallCheck(this, homeCtrl);

  console.log('Home Controller!!!!!');
};

exports.default = homeCtrl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('hb-interiors', ['ngResource', 'ui.router', _home2.default]);

angular.module('hb-interiors').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/partials/home/home',
    controller: 'homeCtrl',
    controllerAs: 'home'
  });
}]);

angular.module('hb-interiors').run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  });
  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
    window.scrollTo(0, 0);
  });
}]);

// var homeCtrl = require('./home/homeCtrl');

/***/ })
],[9]);