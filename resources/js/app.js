import GoodsItem from './view/goodsItem.js';
import GoodsList from  './view/goodsList.js';
import Basket from './logics/basket.js';
import BasketItem from './view/basketItem.js';
import BasketList from './view/basketList.js';

const $goods = document.getElementById('goods');
const $basketWindow = document.getElementById('basketWindow');

const $basketButton = document.getElementById('basketButton');
const $addButtons = document.getElementsByClassName('addButton');

const basket = new Basket();

let goodsItems = [];

function convert(list) {
  let convertedList = [];
  list.forEach(item => 
    convertedList.push(new GoodsItem(item.id, item.title, item.price, item.picture))
  );
  return convertedList; 
}

function createUI(goodsItems) {
  new GoodsList(
    $goods, 
    goodsItems
  ).render();
}

function fetchAndDisplayGoods(url, convert, createUI){
  fetch(url)
    .then((response) => response.json())
    .then(result => {
      goodsItems = convert(result.goods);
      createUI(goodsItems)
    })
}

fetchAndDisplayGoods('../../db.json', convert, createUI);

function isBasketWindowVisible(){
  if($basketWindow.style.display == 'block'){
    return true;
  } 
  return false;
}

function hideBasketWindow(){
  $basketWindow.style.display = 'none';
}

for (let button of $addButtons){
  button.addEventListener('click', event => {
    if(isBasketWindowVisible()){
      hideBasketWindow();
    }

    let target = event.target;
    let parent = target.parentElement;
    let parentId = parent.id;
    
    goodsItems.forEach(element => {
      if(element.id == parentId){
        basket.addItem(new BasketItem(element.id, element.title, element.price, 1));
      } 
    })
  });
}

$basketButton.addEventListener('click', event => {
  let basketItems = basket.results();
  
  new BasketList(
    $basketWindow,
    basketItems
  ).render();
})