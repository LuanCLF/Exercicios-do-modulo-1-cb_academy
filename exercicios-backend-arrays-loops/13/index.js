const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

let posicao = 0;
for (item of disjuntores) {
  if (item) {
    console.log(posicao);
  }
  posicao++;
}
