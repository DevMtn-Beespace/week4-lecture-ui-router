angular.module('routerApp')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");  // send to index if can't find the route
        $stateProvider
          .state('home', {
              url: "/",
              templateUrl: "views/home.html"
          })
          .state('contact', {
              url: "/contact",
              templateUrl: "views/contact.html"
          })
          .state('studio', {
              url: "/studio",
              templateUrl: "views/studio.html"
          })
          // we will need to pull in params and populate the view based on param.
          .state('pricing', {
              url: "/pricing",
              templateUrl: "views/pricing.html"
          })
          .state('projects', {
              url: "/projects/:id",
              templateUrl: "views/projects.html",
              controller: "mainCtrl",
              resolve: [

              ]
          })

        // We need to configure our routes here


});
