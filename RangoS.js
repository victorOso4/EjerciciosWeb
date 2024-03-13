function sumarRango(numeroInicial, numeroFinal){
    if (numeroInicial>=numeroFinal){
  }
  let contador = 0;
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
      contador++;
      let suma = 0;
            for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;  
    }
    return suma;
    }
  
    return contador;
    {
      
}

    
} 

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0