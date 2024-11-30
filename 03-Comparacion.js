let a = 10;

console.log(a > 4); // Distintos operadores de comparacion.
console.log(a >= 4);
console.log(a < 4); // Operadores relacionales.
console.log(a <= 4);

console.log(a != 4); // Operadores de igualdad. // Propenso a dar errores...
console.log(a == 10); // Propenso a dar errores... 
console.log(a == '10'); // Muestra true porque compara los valores no los tipos.

console.log(a === '10'); // False porque compara valores y tipos. // Estos son mas utilizados porque comparas el valor y el tipo.
console.log(a !== '10'); // Pregunta si son distintos tipos de datos y de valores.