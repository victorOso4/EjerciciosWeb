function empiezanConA(arr) {
    const palabrasConA = [];
  
    for (let i = 0; i < arr.length; i++) {
      const palabra = arr[i].toLowerCase();
      if (palabra.charAt(0) === 'a') {
        palabrasConA.push(arr[i]);
      }
    }
  
    return palabrasConA;
  }

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []