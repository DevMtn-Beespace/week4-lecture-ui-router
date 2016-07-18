angular.module('routerApp')
.service('mainSvc', function(){
  this.getRecentProjects = function(id){
    console.log(id); // passing in a param for the controller.
    console.log('service');
  };
})
