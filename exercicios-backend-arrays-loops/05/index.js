const original = [1, 4, 12, 21, 53, 88, 112];
const arrayDeNumerosPar = [];

for (let numero of original) {
  if (numero % 2 === 0) {
    arrayDeNumerosPar.push(numero);
  }
}

console.log(arrayDeNumerosPar);
