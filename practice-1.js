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
// ===========================================

// return a learge length of string from an array

function bestFriend(arr){
    let largeName = arr[0];

    for(let i = 0; i < arr.length; i++){
        const friend = arr[i]

        if(largeName.length < friend.length){
            largeName = friend;
        }
    }
    console.log(largeName)
}

const friends = ['Sakib', 'Tamim', 'Mushfikur', 'Mashrafee', 'Shanto Biswas', 'Liton Das'];
bestFriend(friends);
// =====================================

// find out the positive numbers form an array

function findPositive(numArr){
    let newArr = [];

    for(let i = 0; i < numArr.length; i++){
        const number = numArr[i];
        if(number < 0){
            break;
        }
        else{
            newArr.push(number)
        }
    }
    console.log('Positive Numbers Array is:', newArr)
}

const numbers = [2, 4, 1, 9, 20, -4, 2, -5, 0 , 2, 5, 8, -2, -8];
const positiveNum = findPositive(numbers);
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
