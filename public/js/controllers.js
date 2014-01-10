'use strict';

/* Controllers */

angular.module('portfolioApp.controllers', [])
    .controller('HomeController', ['$scope', 'ProjectService', function($scope, ProjectService) {
        $scope.image1 = true;
        $scope.projects = {};

         ProjectService.success(function(data) {
            $scope.projects = data;
        });

        $scope.toggle = function() {
            $scope.image1 = !$scope.image1;
        };
    }])
    .controller('AboutController', ['$scope', function($scope) {

    }])
    .controller('ContactController', ['$scope', function($scope) {

    }])
    .controller('ProjectController', ['$scope', 'ProjectService', '$routeParams', function($scope, ProjectService, $routeParams) {
        $scope.projects = {};
        $scope.id = $routeParams.id - 1;

        ProjectService.success(function(data) {
            $scope.projects = data;
            $scope.project = $scope.projects[$scope.id];
        });
    }]);
