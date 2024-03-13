function duplicar(arr){
    const duplicados = [];

    for (let i = 0; i < arr.length; i++) {
      
        duplicados.push(arr[i]*2);
      
    }
  
    return duplicados;
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []