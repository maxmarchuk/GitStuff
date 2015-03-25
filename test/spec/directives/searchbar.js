'use strict';

describe('Directive: searchBar', function () {

  // load the directive's module
  beforeEach(module('gitStuffApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-bar></search-bar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchBar directive');
  }));
});
