let a = prompt('Enter first number')
let b = prompt('Enter second number to exponentiate')
let result = a ** b;

const total = () => { 
    if (result > 1){
    return result;
}   else {
    console.log('Введите натуральные числа больше 1')
}   
}

console.log('Your result is:' + total(5, 5));