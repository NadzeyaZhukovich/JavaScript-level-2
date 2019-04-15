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

const GOODS = [
    { id: 1, title: 'iris', price: 100, picture: 'resources/img/iris.jpg' },
    { id: 2, title: 'poppy', price: 120, picture: 'resources/img/poppy.jpg' },
    { id: 3, title: 'sunflower', price: 130, picture: 'resources/img/sunflower.jpg' },
    { id: 4, title: 'chamomile', price: 140, picture: 'resources/img/chamomile.jpg' }
];
const GOOD_ITEMS = convert(GOODS);

function convert(list) {
  let convertedList = [];
  list.forEach(item => 
    convertedList.push(new GoodsItem(item.id, item.title, item.price, item.picture))
  );
  return convertedList; 
}

new GoodsList(
  $goods, 
  GOOD_ITEMS
).render();

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
    
    GOOD_ITEMS.forEach(element => {
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