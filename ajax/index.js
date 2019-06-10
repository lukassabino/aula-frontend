const configReq = {
    url: 'http://www.geonames.org/childrenJSON?geonameId=3469034',
    method: 'GET',
    sucesso(resposta) {
        console.log(resposta);
        const estados = JSON.parse(resposta);
        console.log(estados);
        const conteudo = estados.geonames.map(estado => {
            return estado.adminName1;
        });
        console.log(conteudo);
        let msg = '';
        for (const item of conteudo) {
            msg += item + '<br>';
        }
        document.getElementById('estados').innerHTML = msg;
    },
    erro(e) {
        const msg = document.createTextNode(`${e.code}: ${e.text}`)
        document.body.appendChild(msg);
    }
}
function buscarEstados() {
    ajax(configReq);
}