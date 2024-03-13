function numAsteriscos(str){
    let contador =0;
    
    for (let i=0;i<str.length;i++){
        for(let j=0;j<str[i].length;j++)
        if(str[i][j] == '*'){
            
            contador++;
        }
       
    }
    return contador;
}

console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5