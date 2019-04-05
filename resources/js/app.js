const $goodCardTemplate = document.getElementById('goodCard');
const $goods = document.getElementById('goods');

const GOODS = [
    { title: 'red rose', price: 100, picture: 'resources/img/rose-red.jpg' },
    { title: 'green rose', price: 120, picture: 'resources/img/rose-green.jpg' },
    { title: 'yellow rose', price: 130, picture: 'resources/img/rose-yellow.jpg' },
    { title: 'pink rose', price: 140, picture: 'resources/img/rose-pink.jpg' }
];

const renderGoodsItem = (title, price, picture) => {
    let card = $goodCardTemplate.cloneNode(true);
    card.removeAttribute('id');
    
    card.querySelector('.goodImg').src = picture;
    card.querySelector('.goodTitle').textContent = title;
    card.querySelector('.goodPrice').textContent = price;
    return card;
}

const renderGoodsList = (list) => {
    list.forEach(item => {
        let filledCard = renderGoodsItem(item.title, item.price, item.picture);
        filledCard.style.display = 'block';
        $goods.appendChild(filledCard);
    }); 
}

renderGoodsList(GOODS);