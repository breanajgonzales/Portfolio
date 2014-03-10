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

        console.log($scope.resetText);
    }])
    .controller('AboutController', ['$scope', function($scope) {

    }])
    .controller('ContactController', ['$scope', '$http', function($scope, $http) {
        var weather = function() {
            $http.jsonp('http://api.wunderground.com/api/738c3b992e7164dd/conditions/q/UT/Provo.json?callback=JSON_CALLBACK').
                success(function (data) {
                    $scope.provo = data;
                    var temp = data.current_observation.temp_f;
                    var temp = parseInt(temp);
                    $scope.provo.temp = temp;
                    console.log($scope.provo)
                });
        }
        weather();
    }])
    .controller('BlogController', ['$scope', function($scope) {

    }])
    .controller('ProjectController', ['$scope', 'ProjectService', '$routeParams', function($scope, ProjectService, $routeParams) {
        $scope.projects = {};
        $scope.id = $routeParams.id - 1;

        ProjectService.success(function(data) {
            $scope.projects = data;
            $scope.project = $scope.projects[$scope.id];
        });
    }]);

