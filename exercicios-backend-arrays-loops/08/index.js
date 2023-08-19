const numeros = [3, 4, 1, 8, 11, 7, 5];

let i = 0;

for (let item of numeros) {
  if (item > i) {
    i = item;
  }
}

console.log(i);
