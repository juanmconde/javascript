function suma(a, b){ // Cuando referenciamos los valores dentro de las funciones se llama parametros.
    console.log(arguments) // Forma no practica de ver los argumentos que ingresamos debajo.
    return a + b; // Las funciones pueden recibir multiples argumentos y parametros.
}

let resultado = suma(2, 3, 5, 77, 9, 1); // los valores que les pasamos a las funciones se llaman Argumentos en este caso el 2.
console.log(resultado);
console.log(typeof suma);