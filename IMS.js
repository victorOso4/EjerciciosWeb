function bmi(peso,altura){
    

    var bmi = peso,altura;  

    for (var i=0; i=peso/Math.pow(altura,2); i++)
        if ( i<= 18.5) {
    return "Bajo de peso"
    }else if ( i >= 18.5 && i <= 24.9) {
        return "Normal"
    }else if ( i >= 25 &&  i <= 30) {
        return "Sobrepeso"
    }else if ( i >=30) {
        return "Obeso"
    }else {
        return no_existe
    }
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"