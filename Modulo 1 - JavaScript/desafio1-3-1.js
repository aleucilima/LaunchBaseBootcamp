//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        Rua: 'Rua Guilherme Gembala',
        Numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.Rua}, ${empresa.endereco.Numero}`)