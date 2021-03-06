'use strict';

/* jasmine specs for controllers go here */

describe('HomeController', function () {
    var scope; //we'll use this scope in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('portfolioApp.controllers'));

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        //create an empty scope
        scope = $rootScope.$new();

        //declare the controller and inject our empty scope
        $controller('HomeController', {$scope: scope});
    }));

    // tests start here
    it('image1 should be true', function(){
        expect(scope.image1).toBe(true);
    });
});
