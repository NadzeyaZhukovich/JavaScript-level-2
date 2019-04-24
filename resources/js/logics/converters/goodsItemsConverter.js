import GoodsItem from "../../view/goodsItem.js";

class GoodsItemsConverter{
    static convert(list){
        let convertedList = [];
        list.forEach(item => 
            convertedList.push(
                new GoodsItem(
                    item.id, 
                    item.title, 
                    item.price, 
                    item.picture
                )
            )
        );
        return convertedList; 
    }
}

export default GoodsItemsConverter;