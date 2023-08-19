const letras = ["A", "e", "B", "C", "E", "z"];

let encontrados = 0;

for (let caractere of letras) {
  if (caractere === "E" || caractere === "e") {
    encontrados += 1;
  }
}

const foramEncontradas =
  encontrados === 1
    ? `Foi encontrada 1 letra "E" ou "e".`
    : `Foram encontradas ${encontrados} letras "E" ou "e".`;

if (encontrados > 0) {
  console.log(foramEncontradas);
} else {
  console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
