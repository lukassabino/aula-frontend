const minhaString = 'Frontend';
const minhaString2 = 'Aula ';
const minhaString3 = 'de ';
const frutas = 'banana,maca,pera,laranja';


console.log(typeof minhaString);

//faz a busca pelo indice de frontend no caso a 3 é N
const char3 = minhaString.charAt(3);
console.log(char3);


const charCode = minhaString.charCodeAt(5);
console.log(charCode);

//faz a consulta e tras o resto depois de 2 posições a frente do frontend
const subs = minhaString.substring(2);
console.log(subs);

//faz a mesma consula de cima, porem pode selecionar o intervalo
const subsComInvervalo = minhaString.substring(1, 4);
console.log(subsComInvervalo);


//Verifica as virgulas e separa
const listaDeFrutas = frutas.split(',');
console.log(listaDeFrutas);


//da um replace no 'e' e coloca o maiusculo
const alterado = minhaString.replace('e', 'E');
console.log(alterado);


//concatenando strings
const texto = minhaString2.concat(minhaString3.concat(minhaString));
console.log(texto);

//concatenando strings
const texto1 = minhaString2 + ' ' + minhaString3 + ' ' + minhaString;
console.log(texto1);

//concatenando strings
const texto2 = `${minhaString2} ${minhaString3} ${minhaString} + tuma 2`;
console.log(texto2);
