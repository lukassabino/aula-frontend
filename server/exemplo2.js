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