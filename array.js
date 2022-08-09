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