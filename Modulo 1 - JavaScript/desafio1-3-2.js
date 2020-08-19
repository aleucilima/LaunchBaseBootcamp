//Crie um programa que calcula a soma de receitas e 
//despesas de usuários e no fim retorna o saldo (receitas - despesas)

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];
  
  for(let i = 0; i < usuarios.length; i++){
    let receitas = usuarios[i].receitas
    let despesas = usuarios[i].despesas

    const result = calculaSaldo(receitas, despesas)

    if (result > 0) {
      console.log(`${usuarios[i].nome} Seu saldo POSITIVO é de: ${result}`)
    }
    else{
    console.log(`${usuarios[i].nome} Seu saldo NEGATIVO é de: ${result}`)
   }
  } 


  function calculaSaldo(receitas, despesas) {
      const rec = somaNumeros(receitas)
      const des = somaNumeros(despesas)
      let result = rec - des
      return result
    }   
  
  function somaNumeros(numeros) {
    let sum = 0
    for (let i = 0; i < numeros.length; i++){
      sum = sum + numeros[i]
    }
    return sum
  }