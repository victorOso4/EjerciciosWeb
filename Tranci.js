function transcribir(adn) {
    const complementos = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  
    let arn = '';
    for (let i = 0; i < adn.length; i++) {
      const transcribir = adn[i];
      if (complementos.hasOwnProperty(transcribir)) {
        arn += complementos[transcribir];
      } else {
        arn += transcribir; 
      }
    }
  
    return arn;
  }

  console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"