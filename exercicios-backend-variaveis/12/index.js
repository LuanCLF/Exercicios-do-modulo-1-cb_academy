let m = 110000;
let c = 30000;
let n = 36;

let i = (m / c) ** (1 / n) - 1;
i *= 100;
console.log(
  `O seu financiamento de ${c} reais teve uma taxa de juros de ${i.toFixed(
    3
  )}%, pois após ${n} meses você teve que pagar ${m} reais.`
);
