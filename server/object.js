const obj = {};
console.log(typeof obj);

const obj2 = {
    nome: 'Maria',
    sobrenome: 'da Silva'
}
console.log(obj2.nome);




const pessoa = {
    nome: '',
    idade: '',
    endereco:{}
}

const endereco = {
    rua: 'Rua 123',
    numero: 72
}

pessoa.nome = 'José';
pessoa.idade = 18;
pessoa.endereco = endereco;
console.log(pessoa);

