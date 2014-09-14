'use strict';
(function (_) {
  angular.module('letusgoApp')
    .service('catagaryService', function (localStorageService) {
      this.catagarys = localStorageService.get('catagarys');
      this.getCatagarys = function () {
        return localStorageService.get('catagarys');
      };

      this.storeCatagary = function (catagary) {
        this.temporaryCatagary = catagary;
      };

      this.getStoreCatagary = function () {
        return this.temporaryCatagary;
      };

      this.editCatagary = function (catagary) {
        var catagarys = this.catagarys;
        var index = _.findIndex(catagarys, {'id': catagary.id});
        this.catagarys[index] = catagary;
        this.editCatagarys(catagarys);
      };

      this.editCatagarys = function (catagarys) {
        localStorageService.set('catagarys', catagarys);
      };

      this.removeCatagary = function (catagary) {
        var catagarys = this.catagarys;
        var index = _.findIndex(catagarys, {'id': catagary.id});
        catagarys.splice(index, 1);
        this.editCatagarys(catagarys);
      };

      this.addCatagary = function (catagary) {
        this.catagarys.push(catagary);
        this.editCatagarys(this.catagarys);
      };
    });
})(window._);
