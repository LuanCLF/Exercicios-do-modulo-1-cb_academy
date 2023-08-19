const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const ePermitido =
  idade >= 12 && idade < 65 && possuiPatologia === false && altura > 150
    ? true
    : false;

const eEstudanteOuDeMenor = ehEstudante || idade < 18 ? true : false;

if (ePermitido) {
  if (eEstudanteOuDeMenor) {
    console.log("10 reais");
  } else {
    console.log("20 reais");
  }
} else {
  console.log("ACESSO NEGADO ");
}
