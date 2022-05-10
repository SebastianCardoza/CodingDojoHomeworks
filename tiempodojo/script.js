var cookie=document.querySelector(".cookie")
var c=[24, 18, 27, 19, 21, 16, 26, 21]
var f=[75, 65, 80, 66, 69, 61, 78, 70]
function accept(){
    cookie.remove()
}

function changeTemp(element){
    console.log(element.value);
    if (element.value == "c") {
        for (var i=0; i<8; i++){
            document.querySelector("#t"+i).innerText = c[i]+"°";
        }
    } else {
        for (var i=0; i<8; i++){
            document.querySelector("#t"+i).innerText = f[i]+"°";
        }
    }
}