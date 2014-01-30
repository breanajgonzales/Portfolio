'use strict';

var portfolioApp = angular.module('portfolioApp', [
        'ngRoute',
        'portfolioApp.services',
        'portfolioApp.controllers',
        'portfolioApp.constants',
        'portfolioApp.filters',
        'portfolioApp.directives'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'home.html', controller: 'HomeController', title: 'Home Page'});
        $routeProvider.when('/about', {templateUrl: 'about.html', controller: 'AboutController', title: 'About Page'});
        $routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'ContactController', title: 'Contact Page'});
        $routeProvider.when('/project/:id', {templateUrl: 'partials/projectdisplay.tpl.html', controller: 'ProjectController', title: 'Project Page'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle', function ($location, $rootScope, baseTitle) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;
        });
    }]);

