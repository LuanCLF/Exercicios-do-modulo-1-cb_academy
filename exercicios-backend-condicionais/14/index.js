//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

const alto = quantidadeDeAguaIngerida <= 1.5;
const moderado = quantidadeDeAguaIngerida <= 3;

if (alto) {
  console.log(
    "Risco Alto - Você está ingerindo pouquissima água, beba mais água!"
  );
} else if (moderado) {
  console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else {
  console.log(
    "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!"
  );
}
