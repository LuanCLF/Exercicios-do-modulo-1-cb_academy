//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const credito = (valorDoProduto - valorDoProduto * (5 / 100)) / 100;
const cheque = (valorDoProduto - valorDoProduto * (3 / 100)) / 100;
const debitoOuDinheiro = (valorDoProduto - valorDoProduto * (10 / 100)) / 100;

if (tipoDePagamento === "credito") {
  console.log(`Valor a ser pago: R$${credito.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
  console.log(`Valor a ser pago: R$${cheque.toFixed(2)}`);
} else {
  console.log(`Valor a ser pago: R$${debitoOuDinheiro.toFixed(2)}`);
}
