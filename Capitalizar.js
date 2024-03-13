function capitalizar(str) {
    if (str.length === 0) {
      return str;
    }
  
    const primerCaracter = str[0].toUpperCase();
    const restoStr = str.slice(1).toLowerCase();
  
    return primerCaracter + restoStr;
  }

  console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""