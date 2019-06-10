const motos = ['ML', 'DT', 'Harlley', 'CG'];


//FOR
for (let i = 0; i < motos.length; i++) {
    console.log(motos[i]);   
}


//foreach
motos.forEach((moto, key) => {
    console.log(key, moto);
})


//forof
for (const moto of motos) {
    console.log(moto);
}


//forin
for (const key in motos) { 
    console.log(key)  
}