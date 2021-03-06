angular.module('common.meta', []).factory('Meta', function(){
  var title = 'Cedar + Sage Affordable Online Interior Design';
  var desc = 'Where DIY meets professional interior design. We offer online interior design, space planning, branding, residential and furniture design.';
  return {
    title: function() {return title;},
    setTitle: function(newTitle) { title = newTitle },
    description: function() { return desc;},
    setDesc : function(newDesc) { desc = newDesc}
  }
})
.controller('MetaController', ['$scope', 'Meta', function($scope, Meta){
  $scope.Meta = Meta;
  $scope.metaDesc = Meta;
}]);
