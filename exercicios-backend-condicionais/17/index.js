//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let parcelasRestantes = Math.round((valorDoProduto / 100 - valorPago) / 100);

const valorDasParcelasRestantes =
  (valorDoProduto / 100 - valorPago) / parcelasRestantes;

parcelasRestantes = parcelasRestantes <= 1 ? 1 : parcelasRestantes;
const pascelas = parcelasRestantes === 1 ? "parcela" : "pascelas";

if (valorDasParcelasRestantes >= 0) {
  console.log(
    `Restam ${parcelasRestantes} ${pascelas} de R$${valorDasParcelasRestantes.toFixed(
      0
    )}`
  );
} else {
  console.log("Você pagou sua divida");
}
