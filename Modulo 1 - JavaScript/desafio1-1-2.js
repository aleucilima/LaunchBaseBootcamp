// Desafio 1-2
// Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = 'Marcelo'
const sexo = 'M'
const idade = 48
const contribuicao = 40

if (sexo == 'M' && (idade + contribuicao) >= 95 || sexo == 'F' && (idade + contribuicao) >= 85) {
    console.log(`${nome}, você pode se aposentar!`)   
} else {
    console.log(`${nome}, você NÃO pode se aposentar, pois ainda não atingiu a meta necessária!`)
}
