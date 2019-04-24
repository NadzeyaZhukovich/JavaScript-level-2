import GoodsItem from "./goodsItem.js";

class GoodsList{
    constructor(section, goodsItems){
        this.section = section;
        this.goodsItems = goodsItems;
    }

    sum(){
        let sum = 0;
        this.goodsItems.forEach(item => {
            sum += item.price;
        })
        return sum;
    }
    
    render(){
        this.goodsItems.forEach(item => {
            if (item instanceof GoodsItem) {
                this.section.appendChild(item.render())
            }
        });
    }
}

export default GoodsList;   