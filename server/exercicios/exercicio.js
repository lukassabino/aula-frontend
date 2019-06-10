function enviar(form) {
    let msg = '';
    const elm = document.getElementById('msg');

    for (let i = 0; i < form.length; i++) {
        if (!form[i].value || (form[i].type === "checkbox" && !form[i].checked)) {
            msg += `O campo ${form[i].name} é obrigatório <br>`;
        }
    }
    if (msg) {
        elm.innerHTML = msg;
    } else {
        elm.innerHTML = '';
        alert('Formulário enviado com sucesso!');
    }
}