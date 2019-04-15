import GoodsItem from './view/goodsItem.js';
import GoodsList from  './view/goodsList.js';
import Basket from './logics/basket.js';

const $goods = document.getElementById('goods');
const $basketWindow = document.getElementById('basketWindow');
const $basketButton = document.getElementById('basketButton');

const GOODS = [
    { title: 'iris', price: 100, picture: 'resources/img/iris.jpg' },
    { title: 'poppy', price: 120, picture: 'resources/img/poppy.jpg' },
    { title: 'sunflower', price: 130, picture: 'resources/img/sunflower.jpg' },
    { title: 'chamomile', price: 140, picture: 'resources/img/chamomile.jpg' }
];

function convert(list) {
  let convertedList = [];
  list.forEach(item => 
    convertedList.push(new GoodsItem(item.title, item.price, item.picture))
  );
  return convertedList; 
}

new GoodsList(
  $goods, 
  convert(GOODS)
).render();
