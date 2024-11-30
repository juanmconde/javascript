let nombre = "Chavo";
let edad = 33;
let info = "totalmente loco";

let personaje = {
    nombre: "Chavo",
    edad: 32,
    info: "tolalmente loco",
};
console.log(personaje); // javascript no asegura el orden de las propiedades al mostrarlas
console.log(personaje.edad); // formas de mostrar un objeto en especifico
console.log(personaje['info']); // otra manera

personaje.edad = 13; // forma de modificar 

let llave = 'edad';
personaje[llave] = 12; // otra forma de modificar

delete personaje.info;

console.log(personaje)
