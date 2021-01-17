// Criar um programa de uma auto-peças em que o usuario escolhe opções no menu incial para cadastro de novos produtos, exibir produtos, modificar produtos e excluir produtos.

//1 cadastro - o usuario cadastra o nome, valor, tipo (tipo pré definido - submenu)
//2 exibir - o usuario exibe o cadastro
//3 excluir - o usuario exclui um produto da base de dados
//4 sair - sair do programa



const input = require('readline-sync')

let categoria = ['1 - funilaria ', ' 2 - motor ', ' 3 - suspensao ', ' 4 - cambio ']

let itens = {
  funilaria:[{peca: 'parachoque', valor: 15},{peca: 'parabrisa', valor: 150},{peca: 'retrovisor', valor: 200}],
  motor: [{peca: 'pistao', valor: 50},{peca: 'virabrequim', valor: 500},{peca: 'biela', valor: 30}],
  suspensao: [{peca: 'amortecedor', valor: 20},{peca: 'mola', valor: 25},{peca: 'barra estabilizadora', valor: 150}],
  cambio:[{peca: 'embreagem', valor: 30},{peca: 'manople', valor: 15},{peca: 'caixa de cambio', valor: 200}]    
}


let cat = 0
let peca = 0
let valor = 0
let lista = []

while (true){
  console.log(`
-------------------------
Sistema Auto-Peças
-------------------------
(1) - Cadastro
(2) - Exibir Cadastro
(3) - Excluir Item
(4) - Sair do sistema
-------------------------
`)
  let opcao = parseInt(input.question('Selecione uma opcao: '))
  
  if(opcao === 1){ 
    console.log(`Categorias para cadastro: ${categoria}`)
    cat = input.question('Escolha a opcao de categoria: ')
      if (cat == 1) {
        peca = input.question('Digite nome da peca: ')
        valor = parseInt(input.question('Digite o valor da peca: '))
        lista = {peca, valor}
        itens.funilaria.push(lista)
        console.log(`
        ----------------
        Item cadastrado
        ----------------`)
      }
      else if (cat == 2){
        peca = input.question('Digite nome da peca: ')
        valor = parseInt(input.question('Digite o valor da peca: '))
        lista = {peca, valor}
        itens.motor.push(lista)
        console.log(`
        ----------------
        Item cadastrado
        ----------------`)
      } 
      else if (cat == 3){
        peca = input.question('Digite nome da peca: ')
        valor = parseInt(input.question('Digite o valor da peca: '))
        lista = {peca, valor}
        itens.suspensao.push(lista)
        console.log(`
        ----------------
        Item cadastrado
        ----------------`)       
      }
      else if (cat == 4){
        peca = input.question('Digite nome da peca: ')
        valor = parseInt(input.question('Digite o valor da peca: '))
        lista = {peca, valor}
        itens.cambio.push(lista)
        console.log(`
        ----------------
        Item cadastrado
        ----------------`)
      }
      else {
        console.log('Digite uma opção válida')
      }    
    
  }
  else if (opcao === 2){ 
    console.log(itens)
    
  }

  else if (opcao === 3){ 
  console.log(itens)
  console.log(`Categorias cadastradas: ${categoria}`)
  cat = input.question('Escolha a opcao de categoria para excluir: ')
    if (cat == 1){
      peca = input.question('Escreva a peca para exclusao: ')
      for (let c in itens.funilaria){
        if(peca === itens.funilaria[c].peca) {
            itens.funilaria.splice(c,1)
        }        
      }      
    }
    else if (cat == 2){
      peca = input.question('Escreva a peca para exclusao: ')
      for (let c in itens.motor){
        if(peca === itens.motor[c].peca) {
            itens.motor.splice(c,1)
        }        
      }      
    }
    else if (cat == 3){
      peca = input.question('Escreva a peca para exclusao: ')
      for (let c in itens.suspensao){
        if(peca === itens.suspensao[c].peca) {
            itens.suspensao.splice(c,1)
        }        
      }      
    } 
    else if (cat == 4){
      peca = input.question('Escreva a peca para exclusao: ')
      for (let c in itens.cambio){
        if(peca === itens.cambio[c].peca) {
            itens.cambio.splice(c,1)
        }        
      }      
    }          
  }   
  
  else{ 
    console.log(`
    
    --------------------------------
    <<<<< Programa Finalizado >>>>>
    --------------------------------
    
    `)
    break
  }
}

  




