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
