const numeros = [54, 22, 14, 10, 284];

let seuIndice = 0;
let objetivo = false;

for (let cada of numeros) {
  seuIndice++;
  if (cada === 10) {
    seuIndice -= 1;
    objetivo = true;
    break;
  }
}

if (objetivo) {
  console.log(seuIndice);
} else {
  console.log("-1");
}
