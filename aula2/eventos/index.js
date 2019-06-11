function meuclick() {
    document.getElementById('meuBotao').addEventListener('click', event => {
        console.log(event);
        alert('oi');
    });
}
meuclick();

function pintarFundo(elm) {
    elm.style.backgroundColor = 'teal';
}

function onMouseUp() {
    const elm = document.querySelector('div');
    elm.addEventListener('mouseup', event => {
        console.log(event);
        pintarFundo(elm);
    });
}

onMouseUp();
