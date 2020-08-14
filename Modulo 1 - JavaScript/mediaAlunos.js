//Criar um programa que calcula a média
//das turmas de alunos e envia
//mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome: 'Mayk',
        nota: 9.8
    },
    {
        nome: 'Diego',
        nota: 10
    },
    {
        nome: 'Aleu',
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Fulano',
        nota: 9.8
    },
    {
        nome: 'Ciclano',
        nota: 6
    },
    {
        nome: 'Beltrano',
        nota: 2
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi menor que 5!`)
    }
}

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')