const valorOriginal = 12999;
const valorQuePossuo = 8000;

const decontoNecessario = 100 - (valorQuePossuo * 100) / valorOriginal;
console.log(`O desconto necessário é de ${decontoNecessario.toFixed(2)}%`);
