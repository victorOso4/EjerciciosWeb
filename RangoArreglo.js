function sumarArreglo(arr,posicionInicial,posicionFinal){
    let contador = 0;
    for (let i = posicionInicial + 1; i <= posicionFinal; i++) {
      contador++;
      let suma = 0;
            for (let i = posicionInicial; i <=posicionFinal ; i++) {
        suma += arr[i];  
    }
    return suma;
    }
  
    return contador;
    {
      
}

}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0