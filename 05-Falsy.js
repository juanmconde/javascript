// Short-circuit

// Todos estos valores se los conocen como falsy.

// false
// 0
// '' strings vacios
// null
// undefine
// NaN

// Uso de OR ||
let nombre = 'Chanchita feliz'; // Si esta variable la dejan vacia username mostrara anonimo.
let username = nombre || 'anonimo'; // username contendra a nombre o anonimo.
console.log(username);

// Uso de AND &&
function fn1() {
    console.log('Soy funcion 1');
    return false;
}

function fn2() {
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();
