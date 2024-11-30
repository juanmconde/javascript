// bit = 0 1
// byte = 8 bit
// byte 00000000 = 0
// byte 00000001 = 1
// byte 00000010 = 2
// byte 00000011 = 3
// byte 00000100 = 4
// byte 00000101 = 5
// byte 00000110 = 6
// Base decimal (la que conocemos) porque esta representada por diez numeros.
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Base binaria 0, 1

// operador logico bitwise or |
console.log(1 | 3); // 00000011 va a dar 3 si uno u otro tiene 1 el resultado es 1.
console.log(1 | 4); // 00000101 va a dar 5
console.log(3 | 5); // 00000111 esto da 7

// operador logico bitwise and &
console.log(1 & 3); // 00000001 ambos bit tienen que ser 1 para que marque 1.
console.log(1 & 4); // 00000000
console.log(3 & 5); // 00000001