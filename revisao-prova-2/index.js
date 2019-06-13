function meuclick() {
    document.getElementById('meuBotao').addEventListener('click', event => {
        alert('Botão foi clicado');
    });
}
meuclick();

function funcaoOver() {
    const botaoDois = document.getElementById('meuBotao2');
    botaoDois.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'red';

    });
    botaoDois.addEventListener('mouseleave', event => {
       event.target.style.backgroundColor = '';

    });
}
funcaoOver();
