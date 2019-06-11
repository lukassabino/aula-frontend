const form = [
    {name: 'nome', value: ''},
    {name: 'cidade', value: ''}
];

let msg = '';

for (const item of form) {
    console.log(item);
    if (!item.value) {
        msg += `O campo ${item.name} é obrigatório \n`;  
    }
}

console.log(msg);