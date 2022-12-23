let ans =0;
let numBfrOp;

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
};

const btn = document.querySelector('.numbers');
const screen =document.querySelector('.screen');
const scrnValue = document.querySelector('#screenValue');
btn.addEventListener('click',(e) =>{
    console.log(scrnValue.className)
    if(scrnValue.className == 'zero'){
        numBfrOp = e.target.textContent;
        screen.textContent = numBfrOp;
        scrnValue.className = 'non-zero';
    }else{
        numBfrOp =  numBfrOp.concat(e.target.textContent);
        screen.textContent = numBfrOp;
    }
    
    
});