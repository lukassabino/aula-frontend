// function minhaFuncao() {
//     console.log('Minha função');
// }

// minhaFuncao();

// function outraFuncao(param1, param2) {
//     console.log(param1, param2);
// }

// outraFuncao('texto1', 6);


// function funcaoParam(param1 = 'Não informado') {
//     console.log(param1);
// }


// funcaoParam(56);

// function soma(valor1, valor2) {
//     return valor1 + valor2;
// }

// console.log(soma(5, '8'));

// const minhaFuncao = function(param1) {
//     console.log('Função anonima', param1);
// }

// minhaFuncao('teste');

// const arrow = function(param1) {
//   console.log("Função anonima", param1);
// };

// arrow('arrow');

// const arrow = (param1) => {
//   console.log("Função anonima", param1);
// };

// arrow("arrow");

// const arrow = param1 => {
//   console.log("Função anonima", param1);
// };

// arrow("arrow");

// const arrow = param1 => console.log("Função anonima", param1);
  
// arrow("arrow");

const carros = ['chevete', 'kombi', 'fusca', 'brasília'];

// const filtraCarros = function(carros) {
//     return carros.filter(function(carro) {
//         return carro !== 'chevete';
//     });
// }

const filtraCarros = carros => carros.filter(carro => carro !== 'chevete');

console.log(filtraCarros(carros));
