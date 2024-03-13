function password(contraseña) {
    const reemplazos = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0'
    };
  
    let nuevaCts = '';
  
    for (let i = 0; i < contraseña.length; i++) {
      const caracter = contraseña[i].toLowerCase();
  
      if (caracter === ' ') {
        continue;
      }
  
      if (reemplazos.hasOwnProperty(caracter)) {
        nuevaCts += reemplazos[caracter];
      } else {
        nuevaCts += caracter;
      }
    }
  
    return nuevaCts;
  }

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""