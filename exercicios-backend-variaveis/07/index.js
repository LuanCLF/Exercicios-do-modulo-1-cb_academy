const po = 1000;
const x = 4;
const t = 7;

const P = po * x ** (t / 7);
console.log(
  `
  O número inicial de pessoas infectadas era: ${po} pessoas
  Projeção de infectados para cada pessoa: ${x}
  Tempo decorrido: ${t} semanas
  Número atual de infectados: ${Math.round(P)} pessoas
  `
);
