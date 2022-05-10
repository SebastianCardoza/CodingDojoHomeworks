function pizzaOven(tipoCorteza, tipoSalsa, quesos, toppings){
    var pizza={};
    pizza.corteza = tipoCorteza;
    pizza.salsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;

    return pizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"])
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])
var p3 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella, edam"], ["jamon", "chorizo", "piña"])
var p4 = pizzaOven("lanzado a mano", "tradicional", ["mozzarella", "feta"], ["pimiento", "pollo bbq", "cebollas", "aceituna", "champiñones"])
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);