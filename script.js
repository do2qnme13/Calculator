const display = document.querySelector('.answer-display');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');

let value = '';



numberBtn.forEach(btn => (
  btn.addEventListener('click',(e)=> {
    value = value + e.target.value;
    display.innerText = value;
  })
))
 operatorBtn.forEach(btn => {
  btn.addEventListener('click',(e)=> {
    let operator = e.target.id
    calculate(operator,total,userInput);
  })
 })


 

function multiply(total , userInput) {
  total = total * userInput;
  return total;
}

function add(total , userInput) {
  total = total + userInput;
  return total;
}

function divide(total , userInput) {
  total = total / userInput;
  return total;
}

function subtract (total , userInput) {
  total = total - userInput;
  return total;
}



