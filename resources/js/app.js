import GoodsItem from './view/goodsItem.js';
import BasketItem from './view/basketItem.js';
import GoodsList from  './view/goodsList.js';
import BasketList from './view/basketList.js';
import BasketWindow from './view/basketWindow.js';
import Basket from './logics/basket.js';
import GoodsItemsConverter from './logics/converters/goodsItemsConverter.js';

const API_URI = '../../db.json';

const $goods = document.getElementById('goods');
const $basketButton = document.getElementById('basketButton');

const basket = new Basket();
const basketWindow = new BasketWindow(document.getElementById('basketWindow'));

let goodsItems = [];

function createUI(goodsItems) {
  // add items from json to goods section
  new GoodsList(
    $goods, 
    goodsItems
  ).render();

  // register listener for item's add button
  const $addButtons = document.getElementsByClassName('addButton');
  for (let button of $addButtons){
    button.addEventListener('click', event => clickedOnAddButton(event));
  }
}

function clickedOnAddButton(event) {
  if(basketWindow.isVisible()){
    basketWindow.hide();
  }

  let target = event.target;
  let parent = target.parentElement;
  let parentId = parent.id;
  
  goodsItems.forEach(element => {
    if(element.id == parentId){
      basket.addItem(new BasketItem(element.id, element.title, element.price, 1));
    } 
  })
}

window.addEventListener('load', event => {
  fetch(API_URI)
    .then(response => response.json())
    .then(result => {
      goodsItems = GoodsItemsConverter.convert(result.goods);
      createUI(goodsItems);
    })
});

$basketButton.addEventListener('click', event => {
  let basketItems = basket.results();
  
  new BasketList(
    basketWindow.getContainer(),
    basketItems
  ).render();

  basketWindow.show();
});