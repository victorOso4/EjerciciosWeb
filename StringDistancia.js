function distancia(caracteres,cadena ) {
    let longitudCaracteres=0;
    let longitudCadena=0;
  
    if (caracteres.length > cadena.length) {
      longitudCaracteres = caracteres;
      longitudCadena = cadena;
    } else {
      longitudCaracteres = cadena;
      longitudCadena = caracteres;
    }
  
    let diferencia = 0;
  
    // Iterate over the characters in the longer string
    for (let i = 0; i < longitudCaracteres.length; i++) {
      // Compare characters at the same position in both strings
      if (longitudCadena[i] !== longitudCaracteres[i]) {
        diferencia++;
      }
    }
  
    return diferencia;
  }

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
