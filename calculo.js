
const soma = (num1, num2) => Number(num1) + Number(num2);
const subtracao = (num1, num2) => Number(num1) - Number(num2);
const divisao = (num1, num2) => Number(num1) / Number(num2);
const multiplicacao = (num1, num2) => Number(num1) * Number(num2);
const raiz = (num1) => Math.sqrt(num1);
const potencia = (num1, num2) => Math.pow(num1, num2);

module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao,
    raiz,
    potencia,
};