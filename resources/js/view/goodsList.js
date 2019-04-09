import GoodsItem from "./goodsItem.js";

class GoodsList{
    constructor(section, goodsItems){
        this.section = section;
        this.goodsItems = goodsItems;
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