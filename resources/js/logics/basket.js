class Basket{
    constructor(){
        this.basketItems = [];
    }

    addItem(basketItem){
        this.basketItems.push(basketItem);
        console.log(`internal: ${basketItem.count} x ${basketItem.name}`);
    }

    addUniqueValueToArray(array, value){
        let isUnique = true;
        for(let i = 0; i < array.length; i++){
            if(value.id == array[i].id){
                isUnique = false;
                break;
            }
        }
        if(isUnique == true){
            array.push(value);
        }
    }

    results(){
        const newArray = [];
        for(let i = 0; i < this.basketItems.length; i++){
            let count = 0;
            for(let j = 0; j < this.basketItems.length; j++){
                if(this.basketItems[i].id == this.basketItems[j].id){
                    count++;
                }
            }
            
            // create basketItem with proper count
            let updatedBasketItem = this.basketItems[i];
            updatedBasketItem.count = count;

            this.addUniqueValueToArray(newArray, updatedBasketItem);
        }
        console.log(newArray);
        return newArray;
    }
}

export default Basket;   