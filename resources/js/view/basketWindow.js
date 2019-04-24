class BasketWindow{
    constructor(basketWindow){
        this.basketWindow = basketWindow;
    }
    
    isVisible(){
        if(this.basketWindow.style.display = 'block'){
            return true;
        } 
        return false;
    }
      
    hide(){
        this.basketWindow.style.display = 'none';
    }

    show(){
        this.basketWindow.style.display = 'block';
    }

    getContainer() {
        return this.basketWindow;
    }
}

export default BasketWindow;