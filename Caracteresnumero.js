function numeroDeCaracteres(caracteres, char){
    let contador=0;

    for(i=0;i<caracteres.length;i++){
        if (caracteres[i].toLowerCase() == char.toLowerCase()){

            contador++
        }
    }
    return contador;

}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", 'e')) // 4