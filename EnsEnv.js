function terminanConS(arr) {
    const palabrasConS = [];
  
    for (let i = 0; i < arr.length; i++) {
      const palabra = arr[i].toLowerCase();
      const longitudPalabra = palabra.length;
      if (palabra.charAt(longitudPalabra - 1) === 's') {
        palabrasConS.push(arr[i]);
      }
    }
  
    return palabrasConS;
  }

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []