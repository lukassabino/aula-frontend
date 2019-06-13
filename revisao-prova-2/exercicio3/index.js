function enviar(form) {
    alert('Formulario enviado com sucesso !');
    const content = document.getElementById("recebeinput")
    content.innerHTML = ("Seu texto é: " + form.texto1.value.concat(form.texto2.value));
}

const opcoes = ['Selecione uma cor','Azul', 'Vermelho', 'Preto'];

function selecaoCor(){
    let select = document.getElementById('selecao');
    for (const item of opcoes) {
        const option = document.createElement('option');
        option.innerHTML=item;
        select.appendChild(option);
    }
    

}
selecaoCor();