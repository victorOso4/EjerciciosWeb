function numAsteriscos(str){
    let contador =0;
    
    for (let i=0;i<str.length;i++){
        if(str[i] == '*'){

            contador++;
        }
       
    }
    return contador;
}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0