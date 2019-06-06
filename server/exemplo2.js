function insiraNome() {
    var nome = prompt('Caixa de digitação');
    document.getElementById('teste').innerHTML = nome;
}

function meuAlerta() {
    alert('Caixa de alerta');
}

function confirmar() {
    var isConfirmado = confirm('Caixa de confirmação');
    console.log(isConfirmado);
}


// const c = 2.54654646;
// console.log(c.toFixed(2));
// console.log(c);


// const raio = 5.6;
// const area = Math.PI * Math.pow(raio, 2);
// console.log(area);
// console.log(Math.PI);