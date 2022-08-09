// find the factorial number from the input number using for loop(increment)
function fact(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    console.log('The factorial num is:', factorial);
}

fact(5);

// find the factorial number from the input number using while loop(decrement)

function factorial(num){
    let factNum = 1;
    let i = num;
    while(i >= 1){
       factNum = factNum * i; 
        i--;
    }
    console.log('The factorial num is:', factNum);
}

factorial(6);
// ==================================

// find the fibonacci number from an array 

const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
// ==============================
