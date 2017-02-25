

app.controller('homeCtrl', ['$scope', '$timeout', function($scope, $timeout){

  // $scope.boxHeight = function(img, box){
  //   $timeout(function(){
  //     var boxheight = $(img).height();
  //     console.log(boxheight);
  //     $(box).css('height', boxheight);
  //   }, 50)
  // }
  //
  // $scope.boxHeight('.kitchen', '.green-box');

  // setTimeout(function(){
  //   var ogBox = $('.kitchen').height();
  //   $scope.boxHeight = {'height': ogBox};
  // }, 50);

  $scope.services = [
      { title: 'E-Design',
        link: '/services/e-design',
        img: 'img/icons/containers.png',
        desc: 'You send us images and measurements that you take of the space you would like redesigned.   You pin images to Pinterest or send inspirational images and complete a design survey to help us reimagine your space.  We will compile furniture and accessories that meet your budget.  A floor plan will also be created to help you set up the room.'
      },
      { title: 'Space Planning',
        link: '/services/space-planning',
        img: 'img/icons/house-plan.png',
        desc: 'We can create a functional floor plan that has great flow.  Send us images of your space with measurements to allow us the ability to bring your space new comfort and functionality.'
      },
      { title: 'Branding',
        link: '/services/branding',
        img: 'img/icons/branding.png',
        desc: 'We can create branding tools for you and your company, such as business cards, booklets, posters and other marketing tools.'
      },
      { title: 'Interior Design',
        link: '/services/interior-design',
        img: 'img/icons/think-draw-build.png',
        desc: 'We would love to come to your home and give you a free hour consultation.  We will create a new and inspiring space that emulates your personality.'
      },
      { title: 'Custom Furniture Design',
        link: '/services/furniture',
        img: 'img/icons/construction.png',
        desc: 'We love to create furniture out of sustainable materials. Crafting unique furniture has become a wondeful passion of our.  Let us help you create something one-of-a-kind for your space.'
      }
  ];


}]);

app.directive('boxheight', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          // var boxheight = attrs.boxheight ? attrs.boxheight : 0;
          // elem.css('height', boxheight + 'px');
            scope.$watch('__height', function(newHeight, oldHeight){
              elem.css('height', newHeight + 'px');
            })
        }
    };
});
