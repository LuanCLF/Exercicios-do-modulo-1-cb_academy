const c = 1000;
const i = 0.125;
const t = 5;

const m = c * (1 + i) ** t;
console.log(
  `O capital de ${c}$ somado aos juros de ${
    i * 100
  }%, no período de ${t} meses, será de: ${m.toFixed(0)}$`
);
