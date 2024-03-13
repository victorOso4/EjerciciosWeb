function numerosAPalabras(numeros) {
    var palabras = [
      'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
      'seis', 'siete', 'ocho', 'nueve', 'diez'
    ];
  
    return numeros.map(numero => {
      if (numero >= 0 && numero <= 10) {
        return palabras[numero];
      } else {
        return 'Número fuera de rango';
      }
    });
  }

  console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
  console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]