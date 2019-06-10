const formToJSON = form => {
    const obj = {};
    for (const field of form) {
        if (field.type === 'text') {
            obj[field.name] = field.value;
        }
    }
    return obj;
};

function ajax(config, form) {
    const xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);
    xhr.onload = e => {
        if (xhr.status === 200) {
            config.sucesso(xhr.response);
        } else if (xhr.status >= 400) {
            config.erro ({
                code: xhr.status,
                text: xhr.statusText
            });
        }
    }
    if (config.method.toLowerCase() === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(formToJSON(form)));
    } else {
        xhr.send();
    }


}