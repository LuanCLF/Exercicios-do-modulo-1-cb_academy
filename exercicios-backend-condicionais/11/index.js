const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1000000;

const valorDaParcelaPelaRenda = (rendaMensalEmCentavos / 100) * (18 / 100);
console.log(rendaMensalEmCentavos / 100);
if (rendaMensalEmCentavos / 100 >= 2000) {
  if (mesesDecorridos < 60) {
    if (totalJaPagoPeloAluno < 1800000) {
      console.log(
        `O valor da parcela desse mês é R$ ${valorDaParcelaPelaRenda} reais`
      );
    } else {
      console.log("O aluno já concluiu o pagamento integral do curso");
    }
  } else {
    console.log("O número máximo de meses foi atingido");
  }
} else {
  console.log(
    "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais."
  );
}
