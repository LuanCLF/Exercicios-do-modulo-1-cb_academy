const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

// for (numero of original) {
//   if (numero % 2 === 0) {
//     pares.push(numero);
//   } else {
//     impares.push(numero);
//   }
// }

// let i = -1;
// while (original.length > i) {
//   i++;
//   if (original[i] % 2 === 0) {
//     pares.push(original[i]);
//   } else if (original[i]) {
//     impares.push(original[i]);
//   }
// }

for (i = 0; i < original.length; i++) {
  if (original[i] % 2 === 0) {
    pares.push(original[i]);
  } else {
    impares.push(original[i]);
  }
}

console.log(pares);
console.log(impares);
