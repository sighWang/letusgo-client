'use strict';

function initData(localStorageService) {
  var goodsList = [];
  var cocacola ={id:'ITEM000000', name:'可口可乐', unit:'瓶', price:3.00, category:'drink'};
  var sprite ={id:'ITEM000001', name:'雪碧', unit:'瓶', price:3.00, category:'drink'};
  var lychee = {id:'ITEM000002', name:'荔枝', unit:'斤', price:15.00, category:'fruit'};
  var badminton = new Goods('ITEM000003', '羽毛球', '个', 4.50, 'sport');
  goodsList.push(cocacola, sprite, lychee, badminton);
  if (localStorageService.get('goodsList') === null) {
    localStorageService.set('goodsList', goodsList);
  }

  if (localStorageService.get('catagarys') === null) {
    localStorageService.set('catagarys', [{id:1, name:'drink'}, {id:2, name:'fruit'}, {id:3, name:'sport'}]);
  }
//  if(localStorageService.get('goodsList').length === 0){
//    localStorageService.set('goodsList', goodsList);
//  }
//
//  if(localStorageService.get('catagarys').length === 0){
//    localStorageService.set('catagarys', [
//      {id: 1, name: 'drink'},
//      {id: 2, name: 'fruit'},
//      {id: 3, name: 'sport'}
//    ]);
//  }
  var customItemList = [];
  if (localStorageService.get('customGoodsList') === null) {
    localStorageService.set('customGoodsList', customItemList);
  }
}
