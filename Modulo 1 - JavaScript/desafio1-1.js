//Desafio 1 - 1
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Carlos'
const peso = 84
const altura = 1.88

imc = peso / (altura * altura)

if (imc >= 30){
    console.log(`${nome} seu IMC é ${imc}, portanto você está acima do peso!`)
} else {
    console.log(`${nome} seu IMC é ${imc}, portanto você não está acima do peso!`)
}