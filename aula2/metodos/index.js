// function capturarPorId() {
//     const elm1 = document.getElementById('divUm');
//     elm1.innerHTML = 'Aula';

//     const elm2 = document.getElementById('divDois');
//     elm2.innerHTML = ' de ';

//     const elm3 = document.getElementById('divTres');
//     elm3.innerHTML = 'Frontend';
// }

// capturarPorId();

// function capturarPorTag() {
//     const elm = document.getElementsByTagName('div');
//     console.log(elm);
//     // elm.innerHTML = 'teste';
// }
// capturarPorTag();

// function capturarPorClass() {
//     const elm = document.getElementsByClassName('minha-classe');
//     console.log(elm);
//     elm[0].innerHTML = 'Aula';
// }

// capturarPorClass();

function capturarQuerySelector() {
    // const elm = document.querySelector('#divUm');
    const elm = document.querySelector('.minha-classe');
    console.log(elm);
    elm.innerHTML = 'Aula';
}
capturarQuerySelector();

function capturarQuerySelectorAll() {
    // const elm = document.querySelectorAll('.minha-classe');
    const elm = document.querySelectorAll('#divDois');
    console.log(elm);
}
capturarQuerySelectorAll();