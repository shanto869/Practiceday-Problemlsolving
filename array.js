// find out the even number, even sum and odd number, odd sum form an array

const oddEvenArr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddEvenSum(arr){
    let evenArr = [];
    let oddArr = [];
    let evenSum = 0;
    let oddSum = 0;
    let totalSum = 0;

    for(let i = 0; i < arr.length; i++){
        let number = arr[i];
        totalSum = totalSum + number

        if(number % 2 === 0){
            evenArr.push(number);
            evenSum = evenSum + number;
        }
        else{
            oddArr.push(number);
            oddSum = oddSum + number;
        }
    }
    console.log('Even num Arr:', evenArr);
    console.log('Odd num Arr:', oddArr);
    console.log('Even num Sum:', evenSum);
    console.log('Odd num Sum:', oddSum);
    console.log('Total Sum is:', totalSum);
}

oddEvenSum(oddEvenArr);

// ====================================

//  remove the duplicate element form an array

const myArray = [2, 1, 4, 8, 6, 4, 1, 3, 8, 5, 3, 1, 8, 9, 4, 2, 7, 4, 5, 8, 0, 9];

function removeDuplicate(numbers){
    let uniqueArr = [];
    const sortArr = uniqueArr.sort();

    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];

        if(uniqueArr.includes(num) === false){
             uniqueArr.push(num);
        }
    }
    console.log(uniqueArr);
    console.log(sortArr);
}

removeDuplicate(myArray);
// ========================================

// find out the maximum number from an array

const numbers = [9, 8, 4, 5, 2, 5, 20, 48, 45, 938, 4, 43];

function maxNumber(numbers){
    let maxNum = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];

        if(maxNum < number){
            maxNum = number;
        }
    }
    console.log(maxNum);
}

maxNumber(numbers);
// ===================================

// calculate the sum of odd numbers getter than 10 and less than 50;
const numbersArr = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 49, 50];

function sumOfOddNumbers(numbers){
    let oddSum = 0;
    
    for(let i = 9; i < numbers.length; i++){
        const number = numbers[i];

        if(number % 2 !== 0){
            // console.log(number)
            oddSum = oddSum + number;
        }
    }
    console.log('Total sum of odd number is:', oddSum);
}

sumOfOddNumbers(numbersArr);
// ===============================

// find if anybody got A+ from your friend from an array

const result = [65, 89, 34, 75, 81, 40, 30, 74, 44];

function checkGPA(numbers){
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number >= 80){
            // count = count + 1
            return true;
        }
    }
    // return count;
    return false;
}

const gotResult = checkGPA(result);
console.log(gotResult);

// ====================================

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