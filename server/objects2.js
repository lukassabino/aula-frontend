const pessoa = {
    id: 1,
    nome: 'Joao'
}

const obj = {
    id: '',
    itens: []
}

obj.id = 1;
obj.itens.push(pessoa);
console.log(obj);