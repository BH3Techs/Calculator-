let ans = 0;
let numBfrOp = '..';
let numAftrOp = '..';
let op = "..";

const btn = document.querySelectorAll(".numbers");
const screen = document.querySelector("#theScreen");
const clear = document.querySelector(".clear");
const ops = document.querySelector(".operations");
const equal = document.querySelector(".equal");
const comma = document.getElementById('comma');
const bkspc = document.querySelector('.backspace');

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
};

function operate(operation, num1, num2) {
  let answer = 0;
  switch (operation) {
    case "+":
      answer = add(num1, num2);
      break;
    case "-":
      answer = subtract(num1, num2);
      break;
    case "/":
      answer = divide(num1, num2);
      break;
    case "*":
      answer = multiply(num1, num2);
      break;
  }
  return answer;
};

btn.forEach(num => {
  num.addEventListener("click", (e) => {
    if (screen.className == "screen") {        
      numBfrOp = e.target.textContent;
      screen.textContent = numBfrOp;
      console.log("Called ", numBfrOp);
      screen.className = "non-zero";
    } else {
      if (op == "..") {
        if(numBfrOp.includes('.')){
          comma.disabled =true;
        }
        numBfrOp += e.target.textContent;
        screen.textContent = numBfrOp;
      } else {
        if (numAftrOp == "..") {
          numAftrOp = e.target.textContent;
          screen.textContent = numBfrOp + op + numAftrOp;
        } else {
          if(numAftrOp.includes('.')){
            comma.disabled =true;
          }
          numAftrOp += e.target.textContent;
          screen.textContent = numBfrOp + op + numAftrOp;
        }
      }
    }
    
  });
});


ops.addEventListener("click", (e) => {
  comma.disabled =false;
  if(numBfrOp !== '..'){
    if(op== ".."){
      op = e.target.textContent;
      console.log(numBfrOp);
      screen.textContent = numBfrOp + op;
    }else{
      numBfrOp = operate(op, numBfrOp, numAftrOp);
      console.log(numBfrOp);
      op = e.target.textContent;
      screen.textContent = numBfrOp + op;
      numAftrOp = '..';
    }
  }

});

equal.addEventListener("click", () => {
  if(numBfrOp !== '..' && numAftrOp !== '..' && op !== '..'){
    ans = operate(op, numBfrOp, numAftrOp);
  screen.textContent = ans;
  numAftrOp = '..';
  numBfrOp = '..';
  op = '..';
  screen.className = 'screen';
  }else{
    screen.textContent = 'Error, Press Clear';
  }
});

clear.addEventListener("click", () =>{
  screen.textContent = "0";
  numAftrOp = '..';
  numBfrOp = '..';
  op = '..';
});

bkspc.addEventListener('click', (e) =>{
  let valueOnscreen = screen.textContent;
  screen.textContent = valueOnscreen.substring(0, valueOnscreen.length-1);
  if(numBfrOp.length>1){
    if(numBfrOp === valueOnscreen){
      numBfrOp = numBfrOp.substring(0,numBfrOp.length-1);
    }else if(parseInt(valueOnscreen.charAt(valueOnscreen.length-1)).toString() == 'NaN'){
      op = '..';
    }else{
      numAftrOp = numAftrOp.substring(0,numAftrOp.length-1);
    }
  }else{
    screen.textContent =0;
  }
})
