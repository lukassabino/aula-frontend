function insereLinha() {
    const elm = document.querySelector('#divUm');
    console.log(elm);
    elm.innerHTML = 'Bem-Vindo';
}
insereLinha();

function funcaoOver() {
    const divUm = document.getElementById('divUm');
    divUm.addEventListener('mouseover', event => {
        event.target.style.color = '#005978';
    });
    divUm.addEventListener('mouseleave', event => {
       event.target.style.color = '';
    });
}
funcaoOver();
