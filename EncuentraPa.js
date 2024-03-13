function posiciones(arr) {  
    
    const posicionesPares = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        posicionesPares.push(i);
      }
    }
  
    return posicionesPares;
  }

  // código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []