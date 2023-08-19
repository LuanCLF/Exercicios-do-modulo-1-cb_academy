const caractere = "E";

const vogalMaiuscula =
  caractere === "A" ||
  caractere === "E" ||
  caractere === "I" ||
  caractere === "O" ||
  caractere === "U"
    ? true
    : false;

const vogalMinuscula =
  caractere === "a" ||
  caractere === "e" ||
  caractere === "i" ||
  caractere === "o" ||
  caractere === "u"
    ? true
    : false;

const categoriaNumero = caractere < 1 || caractere >= 1 ? true : false;
const categoriaVogal = vogalMaiuscula || vogalMinuscula ? true : false;
const categoriaConsoante = !categoriaVogal && !categoriaNumero ? true : false;

if (categoriaVogal) {
  if (vogalMaiuscula) {
    console.log("Vogal maiúscula");
  } else {
    console.log("Vogal minúscula");
  }
} else if (categoriaConsoante) {
  console.log("O caractere é consoante");
} else {
  console.log("O caractere é um número");
}
