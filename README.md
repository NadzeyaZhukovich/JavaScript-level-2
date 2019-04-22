# [WIP] JavaScript level 2 course (GeekBrains)
The **JavaSctipt level 2** course cover the following topics:

* Object-Oriented Programming
* Interaction with Server
* Promises
* Regular Expressions
* Vue.js framework
* Node.js framework
* Testing

## Project Structure
Current structure of the project. 
* **resources** *(webpage source code and resources: images, css code, javasctipt code)*
    * **css** *(styles for the project with a folder for background images)*
        * **bg-img**
        * **style.css**
    * **img** *(images for the project)*
    * **js** *(javasctipt files)*
        * **logics** *(classes which contain logic of application)*
        * **view** *(clases which contain code needed for create views for the application)*
        * **app.js** *(main javasctipt file which combine logic and view components)*
* **vendors** *(additional libraries)*
    * **css** *(additional css libraries: grid)*
* **tmp** *(temporary tasks from the course)*
    * **promise**
    * **regular-expressions**
* **db.json** *(json file which emulate database from the server)*
* **index.html** *(main html page of the application)*

## Business logic classes
The `GoodsItemsConverter` class allows to convert array of objects (from json file) to array of GoodsItems objects.
```
const arrayJSON = ...
const goodsItems = GoodsItemsConverter.convert(arrayJSON);
```

The `Basket` class allows to store items in a basket . 
```
const basketItem1 = ...
const basketItem2 = ...

const basket = new Basket();
basket.addItem(basketItem1);
basket.addItem(basketItem2);
basket.addItem(basketItem1);

// return a new array of basketItem with amount of items 
// when we are adding the same item twice, the amount of this item will be 2
basket.results();
```
