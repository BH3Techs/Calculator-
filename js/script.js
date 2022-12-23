let ans =0;
function add (num1,num2) {
    return num1+num2;
};

function subtract(num1, num2){
    return num1-num2;
};

function multiply(num1 , num2){
    return num1*num2;
};

function divide(num1, num2){
    return num1/num2;
};

function operate(operation, num1, num2){
    switch (operation) {
        case '+':
            ans = add(num1. num2);
            break;
        case '-':
            ans = subtract(num1. num2);
            break;
        case '/':
            ans = divide(num1. num2);
            break;
        case '*':
            ans = multiply(num1. num2);
            break;
    }
}