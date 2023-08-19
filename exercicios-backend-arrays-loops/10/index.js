const numeros = [8, 11, 4, 1];

// seu codigo aqui

let proximo = 1;
let atualIndice = 0;

let diferencaAtual = 0;
let maiorDiferenca = 0;

while (atualIndice < numeros.length) {
  diferencaAtual = numeros[atualIndice] - numeros[proximo];
  diferencaAtual < 0 ? diferencaAtual * -1 : diferencaAtual;

  maiorDiferenca =
    diferencaAtual > maiorDiferenca ? diferencaAtual : maiorDiferenca;

  if (proximo >= numeros.length) {
    proximo = 0;
    atualIndice += 1;
  } else {
    proximo++;
  }
}

console.log(maiorDiferenca);
