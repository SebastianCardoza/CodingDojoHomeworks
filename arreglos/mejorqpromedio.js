
function mejorqpromedio(array){
    var prom = promedio(array);
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>prom){
            count++;
        }
    }
    return count;
}

function promedio(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    
    return sum/array.length;
}

var result = mejorqpromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
