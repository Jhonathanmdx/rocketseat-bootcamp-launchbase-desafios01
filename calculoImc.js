//programa para calcular o imc de uma pessoa

const nome = "Jhonathan";
const peso = 130;
const altura = 1.80;

const imc = peso / (altura * altura); // formula para calcular o indice de massa corporal

    if ( imc >= 30 ) { 
        console.log("Jhonathan voce esta acima do peso")
    } else {
        console.log("Jhonathan voce nao esta acima do peso")
    }
    