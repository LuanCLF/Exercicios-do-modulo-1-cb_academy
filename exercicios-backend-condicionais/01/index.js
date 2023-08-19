const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui

const possibilidadePedra =
  (jogada1 === "pedra" && jogada2 === "tesoura") ||
  (jogada1 === "tesoura" && jogada2 === "pedra")
    ? "pedra"
    : "";

const possibilidadePapel =
  (jogada1 === "pedra" && jogada2 === "papel") ||
  (jogada1 === "papel" && jogada2 === "pedra")
    ? "papel"
    : "";

const possibilidadeTesoura =
  (jogada1 === "tesoura" && jogada2 === "papel") ||
  (jogada1 === "papel" && jogada2 === "tesoura")
    ? "tesoura"
    : "";

if (possibilidadePedra) {
  console.log(possibilidadePedra);
} else if (possibilidadePapel) {
  console.log(possibilidadePapel);
} else if (possibilidadeTesoura) {
  console.log(possibilidadeTesoura);
} else {
  console.log("empate");
}
