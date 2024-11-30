// AND, OR, NOT

// AND && con dos simbolos de ampersand

let mayor = false;
let suscrito = true;

// console.log(true && true); // Evalua los 2 valores.
// console.log(false && true); // Si cualquiera de los 2 valores es distinto entrega false.
// console.log(false && false); // false.

console.log('operador and', mayor && suscrito); // Esto y esto. Da true si los dos son verdaderos.

 // OR ||

 console.log('operador or', mayor || suscrito); // Esto o esto. Da true si al menos algun valor es verdadero.

 //  NOT !

 console.log('operador not', !mayor); // Mayor no es falso en este caso muestra true.
 let soloCatalogoInfantil = !mayor;