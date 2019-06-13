function enviar(form) {
    alert('Formulario enviado com sucesso !');
    const content = document.getElementById("recebeinput")
    content.innerHTML = ("Seu texto é: " + form.texto1.value.concat(form.texto2.value));
}

