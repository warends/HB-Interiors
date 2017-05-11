angular.module('common.meta', []).factory('Meta', function(){
  var title = 'Hayley Bagwell Interior Design, Seattle, WA';
  var desc = 'Super DERRR';
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
