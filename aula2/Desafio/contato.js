// function enviar(form) {
//     let msg = '';
//     const elm = document.getElementById('msg');

//     for (let i = 0; i < form.length; i++) {
//         if (!form[i].value || (form[i].type === "checkbox" && !form[i].checked)) {
//             msg += `O campo ${form[i].name} é obrigatório <br>`;
//         }
//     }
//     if (msg) {
//         elm.innerHTML = msg;
//     } else {
//         elm.innerHTML = '';
//         alert('Formulário enviado com sucesso!');
//     }
// }





function enviar(form) {
    let msg = '';
    const elm = document.getElementById('msg');

    for (let i = 0; i < form.length; i++) {
        if (!form[i].value) {
            form[i].style.border = "1px solid red";
            msg += `O campo ${form[i].name} é obrigatório <br>`;
        } else {
            form[i].style.border = "1px solid black";
        }
    }

    if (msg) {
        elm.innerHTML = msg;
    } else {
        elm.innerHTML = '';
        alert('Formulario enviado com sucesso !');
        const content = document.getElementById("msg")
        content.innerHTML = ("Seu nome é: "
            + form.nome.value + "<br>"
            + "Seus comentários: "
            + form.comentario.value);
    }
}














function insereLinha() {
    const elm = document.querySelector('#divUm');
    console.log(elm);
    elm.innerHTML = 'Contato';
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