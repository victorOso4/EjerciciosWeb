function numeroDeAes(str){
    let contador =0;
    
    for (let i=0;i<str.length;i++){
        if(str[i] == 'a'){

            contador++;
        }
       
    }
    return contador;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0