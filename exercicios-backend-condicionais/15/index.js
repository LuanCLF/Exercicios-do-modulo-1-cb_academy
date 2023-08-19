const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

//seu código aqui

if (primeiroNome) {
  if (!apelido) {
    console.log(`${primeiroNome} ${sobrenome}`);
  } else {
    console.log(apelido);
  }
} else {
  console.log("Preencha ao menos um campo indicado");
}
