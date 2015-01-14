'use strict';

describe('Service: gitService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var gitService;
  beforeEach(inject(function (_gitService_) {
    gitService = _gitService_;
  }));

  it('should do something', function () {
    expect(!!gitService).toBe(true);
  });

});
