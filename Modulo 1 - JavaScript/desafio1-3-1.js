//Crie um programa que armazena um array de usuários
//(objetos), cada usuário tem um nome e suas tecnologias(novo array).
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela
//informações dos usuários.

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", " Node.js"] }
  ];

function checaUsuario(usuario) {
  for(let i = 0; i < usuario.tecnologias.length ; i++) {
    if(usuario.tecnologias[i] === 'CSS'){
        return true
    }
  }
  return false
}

for(let i = 0; i < usuarios.length; i++) {
  if(checaUsuario(usuarios[i])){
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}


