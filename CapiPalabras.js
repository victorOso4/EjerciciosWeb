function capitalizar(str) {
    const palabras = str.split(' ');
    const palabrasCapitalizadas = [];
  
    for (let palabra of palabras) {
      if (palabra.length > 0) {
        const primerCaracter = palabra[0].toUpperCase();
        const restoStr = palabra.slice(1).toLowerCase();
        palabrasCapitalizadas.push(primerCaracter + restoStr);
      } else {
        palabrasCapitalizadas.push(palabra);
      }
    }
  
    return palabrasCapitalizadas.join(' ');
  }

  console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""