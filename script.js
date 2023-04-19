// Selecionar todos elementos da classe 'produto_preco'
const array_preco = document.getElementsByClassName('produto_preco');
let soma = 0;
// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)

for (i = 0; i < array_preco.length; i++){
  soma += parseFloat(array_preco[i].innerText); 
}
// Escrever no conteúdo da página o valor da soma
document.write('Total: R$' + soma);