const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// seu codigo aqui

for (let i = filaDeDentro.length; i < 5; i = filaDeDentro.length) {
  let temVaga = filaDeFora.length >= 1;
  if (temVaga) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
  } else {
    break;
  }
}

console.log(filaDeDentro);
console.log(filaDeFora);
