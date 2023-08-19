const ladoA = 3;
const ladoB = 3;

//seu código aqui

let bucha = ladoA === ladoB ? ladoA : "Não é bucha";

if (bucha === 0) {
  console.log("Branco");
} else if (bucha === 1) {
  console.log("Ás");
} else if (bucha === 2) {
  console.log("Duque");
} else if (bucha === 3) {
  console.log("Terno");
} else if (bucha === 4) {
  console.log("Quadra");
} else if (bucha === 5) {
  console.log("Quina");
} else if (bucha === 6) {
  console.log("Sena");
} else {
  console.log(bucha);
}
