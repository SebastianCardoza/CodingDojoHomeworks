
function pasoalto(arreglo, corte){
    var arreglofiltrado=[]
    for(var i=0; i<arreglo.length; i++){
        if(arreglo[i]>corte){
            arreglofiltrado.push(arreglo[i]);
        }
    }
    return arreglofiltrado;
}

var result = pasoalto([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);