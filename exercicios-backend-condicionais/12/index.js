const diaDaSemana = 10;
const segunda = 1;
const terca = 2;
const quarta = 3;
const quinta = 4;
const sexta = 5;
const sabado = 6;
const domingo = 7;

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
  if (diaDaSemana === segunda) {
    console.log("Segunda feira");
  } else if (diaDaSemana === terca) {
    console.log("Terça feira");
  } else if (diaDaSemana === quarta) {
    console.log("Quarta feira");
  } else if (diaDaSemana === quinta) {
    console.log("Quinta feira");
  } else if (diaDaSemana === sexta) {
    console.log("Sexta feira");
  } else if (diaDaSemana === sabado) {
    console.log("Sábado");
  } else if (diaDaSemana === domingo) {
    console.log("Domingo");
  }
} else {
  console.log("O dia da semana informado não é válido.");
}
