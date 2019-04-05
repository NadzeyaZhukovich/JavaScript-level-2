// ES6: const $goodCardTemplate = document.getElementById('goodCard');
var $goodCardTemplate = document.getElementById('goodCard');
// ES6: const $goods = document.getElementById('goods');
var $goods = document.getElementById('goods');

// ES: const GOODS = [
var GOODS = [
    { title: 'red rose', price: 100, picture: 'resources/img/rose-red.jpg' },
    { title: 'green rose', price: 120, picture: 'resources/img/rose-green.jpg' },
    { title: 'yellow rose', price: 130, picture: 'resources/img/rose-yellow.jpg' },
    { title: 'pink rose', price: 140, picture: 'resources/img/rose-pink.jpg' }
];

// ES6: const renderGoodsItem = (title, price, picture) => {
function renderGoodsItem(title, price, picture) {
    // ES6: let card = $goodCardTemplate.cloneNode(true);
    var card = $goodCardTemplate.cloneNode(true);
    card.removeAttribute('id');
    
    card.querySelector('.goodImg').src = picture;
    card.querySelector('.goodTitle').textContent = title;
    card.querySelector('.goodPrice').textContent = price;
    return card;
}

// ES6: const renderGoodsList = (list) => {
function renderGoodsList(list) {
    // ES6: list.forEach(item => {  
    list.forEach(function(item) {
        // ES6: let filledCard = renderGoodsItem(item.title, item.price, item.picture);
        var filledCard = renderGoodsItem(item.title, item.price, item.picture);
        filledCard.style.display = 'block';
        $goods.appendChild(filledCard);
    }); 
}

renderGoodsList(GOODS);