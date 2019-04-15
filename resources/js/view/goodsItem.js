class GoodsItem{
    constructor(id, title, price, picture){
      this.id = id;
      this.title = title;
      this.price = price;
      this.picture = picture;
    }
  
    // It should be private
    cardTemplateElement(){
      return document.getElementById('goodCard');
    }
  
    render(){
      let card = this.cardTemplateElement().cloneNode(true);
      card.removeAttribute('id');
      card.setAttribute('id', `${this.id}`);

      card.querySelector('.goodImg').src = this.picture;
      card.querySelector('.goodTitle').textContent = this.title;
      card.querySelector('.goodPrice').textContent = this.price;
  
      card.style.display = 'block'
      return card;
    }
}

export default GoodsItem;