angular.module('routerApp').controller('mainCtrl',function($scope, $stateParams, $location, mainSvc){

    $scope.test = 'Hello From projects Page';
    console.log($stateParams);
    console.log($location);

    var id = $stateParams;
    if ($stateParams) {
      console.log(id);
      mainSvc.getRecentProjects(id);
    }
});
