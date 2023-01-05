let ans = 0;
let numBfrOp;
let numAftrOp = 0;
let op = "..";

const btn = document.querySelectorAll(".numbers");
const screen = document.querySelector(".screen");
const scrnValue = document.querySelector("#screenValue");
const ops = document.querySelector(".operations");
const equal = document.querySelector(".equal");

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

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
}
btn.forEach(num => {
  num.addEventListener("click", (e) => {
    if (scrnValue.className == "zero") {
      numBfrOp = e.target.textContent;
      screen.textContent = numBfrOp;
      scrnValue.className = "non-zero";
    } else {
      if (op == "..") {
        numBfrOp = numBfrOp.concat(e.target.textContent);
        screen.textContent = numBfrOp;
      } else {
        if (numAftrOp !== 0) {
          numAftrOp = numAftrOp.concat(e.target.textContent);
          screen.textContent = numBfrOp.concat(op).concat(numAftrOp);
        } else {
          numAftrOp = e.target.textContent;
          screen.textContent = numBfrOp.concat(op).concat(numAftrOp);
        }
      }
    }
  });
});


ops.addEventListener("click", (e) => {
  op = e.target.textContent;
  screen.textContent = numBfrOp.concat(op);
});

equal.addEventListener("click", () => {
  ans = operate(op, numBfrOp, numAftrOp);
  screen.textContent = ans;
});
