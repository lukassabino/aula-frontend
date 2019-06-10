const configReq = {
    url: 'https://httpbin.org/post',
    method: 'POST',
    sucesso(resposta) {
        if (resposta) {
            alert('Formulario salvo com sucesso');
        }
    },
    erro(e) {
        const msg = document.createTextNode(`${e.code}: ${e.text}`)
        document.body.appendChild(msg);
    }
}
function enviar(form) {
    ajax(configReq, form);
}