class BasketItem{
    constructor(id, name, price, count){
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    render(){
        let cart = document.createElement('div');
        cart.className = 'basketItem';
        cart.textContent = `${this.name} ${this.count} x ${this.price}`;
        return cart;
    }
}

export default BasketItem;