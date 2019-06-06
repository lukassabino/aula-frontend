const carros = ['chevete', 'fusca', 'opala', 'brasilia'];
console.log(typeof carros);

//pop remove o ultimo elemeneto de um array e retorna
const pop = carros.pop();
console.log(pop);
console.log(carros);

//push adiciona um elemento no array e retorna
const push = carros.push('kombi');
console.log(push);
console.log(carros);

//shift remove o primeiro elemento de um array e retorna
const shift = carros.shift();
console.log(shift);
console.log(carros);

//unshift coloca um elemento no inicio do array
const unshift = carros.unshift('marajó');
console.log(unshift);
console.log(carros);

//deletando a partir do terceiro
const splice = carros.splice(3);
console.log(splice);
console.log(carros);

//deleta a kombi e coloca a belina
const splice2 = carros.splice(3, 3, 'belina');
console.log(splice2);
console.log(carros);

//concatena a lista de carros com o splice, elemento que foi deletado em cima
const concat = carros.concat(splice);
console.log(concat);