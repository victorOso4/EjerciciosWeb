function multiplicarArreglo(arr) {
    let multiplicar = 1;
    for (let i = 0; i < arr.length; i++) {
      multiplicar *= arr[i];
    }
    return multiplicar;
  }

  console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1