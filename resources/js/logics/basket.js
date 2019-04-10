class Basket{
    constructor(section){
        this.section = section;
        this.basketItems = [];
    }

    addItem(goodItem){
        this.basketItems.push(goodItem);
    }

    render(){
        this.section.style.display = 'block';
    }
}

export default Basket;   