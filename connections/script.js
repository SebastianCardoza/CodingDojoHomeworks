
var connectionCount = 498;
var connections = document.querySelector("#connections");
var requestCount=2;
var requests = document.querySelector("#requests");
var profileName=document.querySelector("#profileName");

function cambiarNombre(){
    profileName.innerText="Pepito Programmer";
}

function shadow(element){
    element.classList.add("shadow");
}

function noShadow(element){
    element.classList.remove("shadow");
}
function accept(i){
    document.querySelector("#request"+i).remove();
    requestCount--;
    requests.innerText=requestCount;
    connectionCount++;
    connections.innerText=connectionCount;
}
function reject(i){
    document.querySelector("#request"+i).remove();
    requestCount--;
    requests.innerText=requestCount;
}
