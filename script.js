const numero = document.getElementById('numero');
const resultado = document.getElementById('resultado');
const tabuada = [];

function Calcular() {
    for (let i = 1; i <= 10; i++) { 
        tabuada[i] = numero.value + " x " + i + " = " + (numero.value * i);
    }    
    resultado.innerHTML =
        tabuada[1] + '<br>' +
        tabuada[2] + '<br>' +
        tabuada[3] + '<br>' +
        tabuada[4] + '<br>' +
        tabuada[5] + '<br>' +
        tabuada[6] + '<br>' +
        tabuada[7] + '<br>' +
        tabuada[8] + '<br>' +
        tabuada[9] + '<br>' +
        tabuada[10] + '<br>';
}