var comida = 0;

function siemprehambriento(arreglo){
    comida = 0;
    for (var i=0; i<arreglo.length; i++){
        if (arreglo[i]=="comida"){
            console.log("delicioso");
            comida++;
        }
    }
    if(comida == 0){
        console.log("Tengo hambre");
    }
}

siemprehambriento([3.14,"comida","pastel", true, "comida"]);
siemprehambriento([4, 1, 5, 7, 2]);