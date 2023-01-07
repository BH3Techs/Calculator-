let ans = 0;
let numBfrOp = '..';
let numAftrOp = '..';
let op = "..";

const btn = document.querySelectorAll(".numbers");
const screen = document.querySelector("#theScreen");
const clear = document.querySelector(".clear");
const ops = document.querySelector(".operations");
const equal = document.querySelector(".equal");

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
        numBfrOp += e.target.textContent;
        screen.textContent = numBfrOp;
      } else {
        if (numAftrOp !== "..") {
          numAftrOp = numAftrOp + e.target.textContent;
          screen.textContent = numBfrOp + op + numAftrOp;
        } else {
          numAftrOp = e.target.textContent;
          screen.textContent = numBfrOp + op + numAftrOp;
        }
      }
    }
    
  });
});


ops.addEventListener("click", (e) => {
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
