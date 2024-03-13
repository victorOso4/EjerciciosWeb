function pares(arr) {
    const pares = [];
  
    // Recorrer el arreglo de entrada
    for (let i = 0; i < arr.length; i++) {
      // Verificar si el número es par
      if (arr[i] % 2 === 0) {
        // Agregar el número par al nuevo arreglo
        pares.push(arr[i]);
      }
    }
  
    // Retornar el arreglo con los números pares
    return pares;
  }

  console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []