// will check the number is positive or negative.

function isPositive(number){
    if(number > 0){
        console.log(number, 'this number is positive')
    }
    else{
        console.log(number, 'this number is negative')
    }
}

isPositive(6);

// ==================================
// fing the area of triangle

function triangleArea(base, heigth){
    const area = (1 / 2) * base * heigth;
    console.log('The area of triangel is:', area);
}

triangleArea(5, 10);
// ========================================
// find the area of rectangle

function rectangleArea(heigth, width){
    const area = heigth * width;
    console.log('The area of rectangle is:', area);
}

rectangleArea(5, 8);
// =========================================
// check the number is prime or not

function isPrime(num){
    if(num < 1){
        return `${num} this number is not a prime number`;
    }
    else if(num === 1){
        return `${num} is neither  prime nor composite`;
    }
    else{
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return `${num} is not a prime number`;
            }
        }
        return `${num} is a prime number`;
    }
}

const checkPrime = isPrime(11);
console.log(checkPrime);