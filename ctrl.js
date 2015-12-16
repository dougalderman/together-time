angular.module('myApp').controller('myCtrl', function($scope, niceService) {

  $scope.niceList = niceService.niceList;
  $scope.naughtyList = niceService.naughtyList;

  $scope.addNewPerson = function() {
      niceService.addPerson($scope.person);
  }

  
});
