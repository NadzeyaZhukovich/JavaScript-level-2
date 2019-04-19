import BasketItem from './basketItem.js';

class BasketList{
    constructor(section, basketItem){
        this.section = section;
        this.basketItem = basketItem;
    }

    render(){
        while(this.section.firstChild){
            this.section.removeChild(this.section.firstChild);
        }

        this.basketItem.forEach(item => {
            if(item instanceof BasketItem){
                this.section.appendChild(item.render());
            }
        })
    }
}

export default BasketList;  