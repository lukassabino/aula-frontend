function meuclick() {
    document.getElementById('meuBotao').addEventListener('click', event => {
    const elm = document.querySelectorAll('.minha-classe');
        for (const i of elm) {
            i.style.backgroundColor = 'teal';
        }
   
    });
}

meuclick();



function capturarQuerySelector() {
    const elm = document.querySelector('#divUm');
    console.log(elm);
    elm.innerHTML = 'Frontend';
}
capturarQuerySelector();