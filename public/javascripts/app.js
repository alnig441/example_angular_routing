var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',
        {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        }).when('/about',
        {
            templateUrl: '/views/about.html',
            controller: 'aboutController'
        }).when('/contact',
        {
            templateUrl: '/views/contact.html',
            controller: 'contactController'
        }).when('/users', {
            templateUrl: '/usersNotAPI'
        });
});

app.controller('mainController', function($scope){
    $scope.message = "I'm on the main page! Woo!";
});

app.controller('aboutController', function($scope){
    $scope.message = "I'm on the about page! Woo!";
});

app.controller('contactController', function($scope){
    $scope.message = "I'm on the contact page! Woo!";
});