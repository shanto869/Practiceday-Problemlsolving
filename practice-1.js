// feet to inch -------
function feetToInch(feet){
    const inch = feet * 12;
    console.log('Inch:', inch);
}

feetToInch(5)
// ==============================

// centimeter to meter-----
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    console.log('Meter:', meter);
}

centimeterToMeter(1000);
// =============================

// paper requirements for printing books

function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const firstBookQuantityPage = firstBookQuantity * firstBookPage;
    const secondBookQuantityPage = secondBookQuantity * secondBookPage;
    const thirdBookQuantityPage = thirdBookQuantity * thirdBookPage;

    const totalPageQuantity = firstBookQuantityPage + secondBookQuantityPage + thirdBookQuantityPage;
    console.log('Total Page Need:', totalPageQuantity);
}

paperRequirements(2, 2, 2);

// ==========================================

// check odd or even number 

function checkOddEven(number){

    if(number % 2 === 0){
        console.log(number, 'This number is Even');
    }
    else{
        console.log(number, 'This number is Odd');
    }
}

checkOddEven(50);

// ======================================
// find out the largest number

function largestNumber(num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        console.log(num1, 'is the largest number');
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2, 'is the largest number');
    }
    else{
        console.log(num3, 'is the largest number');
    }
}

largestNumber(4, 9, 20);

// ========================================

// calculate ElectricityBill 
// 01. first 100 ----> 5 tk.            // 02. first 100 ----> 5 tk, second 100 ---> 6 tk.  
// 03. first 100 -----> 5 tk,  second 100 ----> 6 tk, 200+ ------> 7 tk.  
     
function electricityBill(unit){
    let bill;
    const first100Unit = 5;
    const second100Unit = 6;
    const restUnitRate = 7;

    if(unit <= 100){
        bill = unit * first100Unit;
    }
    else if(unit <= 200){
        const first100 = 100 * first100Unit;
        const remaining = unit - 100;
        const remainingCost = remaining * second100Unit;
        bill = first100 + remainingCost;
    }
    else{
        const first100 = 100 * first100Unit;
        const second100 = 100 * second100Unit;
        const remaining = unit - 200;
        const remainingCost = remaining * restUnitRate;
        bill = first100 + second100 + remainingCost;
    }
    return bill;
 }   

 const totalCost = electricityBill(400);
 console.log(totalCost);



