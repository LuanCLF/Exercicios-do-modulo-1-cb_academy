const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComInicialA = [];
for (let inicial of nomes) {
  if (inicial[0] === "A" || inicial[0] === "a") {
    nomesComInicialA.push(inicial);
  }
}

console.log(nomesComInicialA);
