var operators = "x / - +";

function calcSetup(){
  var buttons = document.querySelectorAll(".buttons");

  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", buttonClicked);
  }
}

function buttonClicked(e){
  var display = document.querySelector("#display");

  value = this.textContent

  if(operators.indexOf(value) > -1){
    display.textContent = addOperator(display.textContent, value);
  }
  else if (value == 'C'){
    display.textContent = clearScreen();
  }
  else if (value == '='){
    display.textContent = evaluateFunction(display.textContent);
  }
  else{
    display.textContent = addNumber(display.textContent, value);
  }
}

function clearScreen(){
  return '';
}

function addOperator(s, op){
  if(operators.indexOf(s[s.length-1]) == -1 && s != ''){
       return s + op;
  }
  else return s;
}

function evaluateFunction(s){
  if(operators.indexOf(s[s.length-1]) == -1){
    s = s.replace(/x/g, '*');
    return eval(s);
  }
  else return s;
}

function addNumber(s, num){
  return s + num;
}
