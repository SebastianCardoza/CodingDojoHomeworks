var displayDiv = document.querySelector("#display");
displayDiv.innerText = 0;
var num1=0;
var num2=0;
// variable donde se determinara si es lo escrito en la calculadora se guarda en el num1 o num2
var turn1 =true;
// variable que nos indicara si es que es un nuevo numero de tal manera que se borre lo mostrado en la pantalla
var newnumber=false;
var result=0;
var op="";

function press(number){
    if (Number(displayDiv.innerText) == 0 || newnumber){
        displayDiv.innerText = number ;
        newnumber = false;
    } else {
        displayDiv.innerText = displayDiv.innerText.toString() + number ;
    }
    // if(num1 == 0){
    //     num2 = Number(displayDiv.innerText);
    // } else {
    //     num1 = Number(displayDiv.innerText);
    // }
}

function setOP(operation){
    newnumber = true;
    if (turn1){
        num1 = Number(displayDiv.innerText);
        turn1=false;
    } else {
        num2 = Number(displayDiv.innerText);
        turn1=true;
    }
    op=operation;
}

function calculate(){
    num2 = Number(displayDiv.innerText);

    if (op=="+"){
        result=num1+num2;
    } else if (op=="-"){
        result=num1-num2;
    } else if (op=="*"){
        result=num1*num2;
    } else if (op=="/"){
        result=num1/num2;
    } else {
        result=0;
    }
    displayDiv.innerText=result;
    num1=result;
    num2=0;
    turn1=false;
    newnumber = true;
}

function clr(){
    newnumber=false;
    turn1=true;
    num1=0;
    num2=0;
    result=0;
    op="";
    displayDiv.innerText = 0 ;
}

var buttonTag = document.querySelectorAll("button");
buttonTag.style.color = "red"

for (var i=0; i < buttonTag.length; i++){
    buttonTag[i].addEventListener("mouseover", point(buttonTag[i]));
    buttonTag[i].addEventListener("mouseout", noPoint(buttonTag[i]));
}

function point(element){
    element.classList.add("pointer");
}

function noPoint(element){
    element.classList.remove("cursor");
}
