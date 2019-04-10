import GoodsItem from './view/goodsItem.js';
import GoodsList from  './view/goodsList.js';
import Basket from './logics/basket.js';

const $goods = document.getElementById('goods');
const $basketWindow = document.getElementById('basketWindow');
const $basketButton = document.getElementById('basketButton');

const GOODS = [
    { title: 'red rose', price: 100, picture: 'resources/img/rose-red.jpg' },
    { title: 'green rose', price: 120, picture: 'resources/img/rose-green.jpg' },
    { title: 'yellow rose', price: 130, picture: 'resources/img/rose-yellow.jpg' },
    { title: 'pink rose', price: 140, picture: 'resources/img/rose-pink.jpg' }
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
