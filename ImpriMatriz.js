function imprimirMatriz(matriz) {
 resultado = "";
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      resultado += matriz[i][j] + "\n"
    }
  }
  return resultado;
}
  
  console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))