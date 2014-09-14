'use strict';
describe('Service: catagaryService', function () {
  var catagaryService, store = {}, localStorageService, $scope;

  beforeEach(function () {
    module('letusgoApp');
    inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      localStorageService = $injector.get('localStorageService');
      catagaryService = $injector.get('catagaryService');
    });
    spyOn(localStorageService, 'get').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorageService, 'set').and.callFake(function (key, value) {
      store[key] = value;
    });
    initData(localStorageService);
  });

  it('catagarys: should be defined', function () {
    expect(catagaryService.catagarys.length).toEqual(jasmine.any(Number));
  });

  it('editCatagary: catagary should be update', function () {
    spyOn(catagaryService, 'editCatagarys');
    catagaryService.editCatagary({id: '4', name: '4'});
    expect(catagaryService.editCatagarys).toHaveBeenCalled();
  });

  it('editCatagarys: catagarys should be uodate', function () {
    catagaryService.editCatagarys([
      {id: '4', name: '4'}
    ]);
    expect(localStorageService.set).toHaveBeenCalledWith('catagarys', [
      {id: '4', name: '4'}
    ]);
  });

  it('removeCatagary: catagarys should be delete one', function () {
    var length = catagaryService.catagarys.length;
    catagaryService.removeCatagary({id: '4', name: '4'});
    expect(catagaryService.catagarys.length).toEqual(length - 1);
  });
  it('addCatagary:catagarys should be add one', function () {
    var length = catagaryService.catagarys.length;
    catagaryService.addCatagary({id: '4', name: '4'});
    expect(catagaryService.catagarys.length).toEqual(length + 1);
  });
});

