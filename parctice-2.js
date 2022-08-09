// find out total price from an object
const product1 = {brand : 'lenovo', color : 'black', price : 20000};
const product2 = {brand : 'toyta', color : 'black', price : 15000};
const product3 = {brand : 'BMW', color : 'white', price : 10000};

function productPrice(product1, product2, product3){
    const totalPrice = product1.price + product2.price + product3.price;
    console.log(totalPrice)
}

productPrice(product1, product2, product3)

// ====================================

// find out  the total price from an array of object
const phones = [
    {brand : 'lenovo', color : 'black', price : 2000},
    {brand : 'toyta', color : 'black', price : 5000},
    {brand : 'bmw', color : 'black', price : 6000},
    {brand : 'nokia', color : 'black', price : 7000}
]

function totalProductPrice(phones){
    let totalCost = 0;

    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        totalCost = totalCost + phone.price;
    }
    console.log(totalCost)
}

totalProductPrice(phones);

// =================================================
// write a function to find out discunt price
// 1000 tk -----> 10%,  3000 tk ---->15%,   5000 tk ---->20%

function totalCost(amount){

    if(amount >= 1000 && amount < 3000){
        const discount = amount * 10 / 100;
        const total = amount - discount;
        console.log('You got discount:', discount);
        console.log('Total Amount is:', total);
    }
    else if(amount >= 3000 && amount < 5000){
        const discount = amount * (15 / 100);
        const total = amount - discount;
        console.log('You got discount:', discount);
        console.log('Total Amount is:', total);
    }
    else if(amount >= 5000){
        const discount = amount * (20 / 100);
        const total = amount - discount;
        console.log('You got discount:', discount);
        console.log('Total Amount is:', total);
    }
    else{
        console.log('Sorry!! You do not get any discunt')
        console.log('Your total amount is:', amount)
    }
}

totalCost(1200);