const arquivo = require('fs')
const input = require('readline-sync')


//MENUS
const menu = `${'='.repeat(30)}
     Escolha uma opcao       
${'='.repeat(30)}
 1 - Novo Usuario         
                            
 2 - Acesso Conta
                          
 3 - Acesso Administrativo
 
 4 - Sair
${'='.repeat(30)}
`



const menu_cc = `${'='.repeat(30)}
      Escolha uma opção
${'='.repeat(30)}
1 - Saldo

2 - Deposito

3 - Saque

4 - Transferencias

5 - Emprestimos

6 - Sair

${'='.repeat(30)}
`

const menuGer = `${'='.repeat(30)}
Escolha uma opção
${'='.repeat(30)}

1 - Aprovar emprestimos

2 - Sair

${'='.repeat(30)}
`


//==================================================================================================================================

 

//vetor de cadastro inicial
let bancoCad = JSON.parse(arquivo.readFileSync('dados.json').toString())

  


//funcao para criar novo usuario e adicionar no cadastro principal================================================
function newUser(){
    
  let newName = input.question('Nome completo: ').toUpperCase()
  let newCpf = parseInt(input.question('CPF: '))  
  let newEndereco = input.question('Endereco completo: ')
  let newSenha = parseInt(input.question('Escolha uma senha com 4 digitos: '))
  let newValor = parseInt(input.question('Deposite um valor inicial para abertura: '))
  const newContaCorrente = parseInt(Math.floor(Math.random()*100000))
  let emprestimo
  let newCadastro = {nome:newName, cpf:newCpf, endereco:newEndereco, senha:newSenha, conta:newContaCorrente, valor:newValor, emprestimo:'N'}  
  console.log(`
  ===================================
  |    ANOTE OS DADOS DE ACESSO     | 
  ===================================
  Sua nova conta: ${newContaCorrente}
  Sua nova senha: ${newSenha}
  Seu saldo é: R$ ${newValor}
  ===================================
  `)
return newCadastro}

//funcao para validar conta e senha==================================================================================
function validaAcesso(){
  console.log(`
=====================
|  Faça seu login   |  
=====================
`)

let validConta = parseInt(input.question('Digite a conta: '))
let validSenha = parseInt(input.question('Digite a senha: '))

validAcesso = bancoCad.filter(elemento => elemento.conta === validConta && elemento.senha === validSenha) 
  return validAcesso.length > 0
}
//====================================================================================================================

function acessoGerencia(){
  console.log(`
===========================
|  Senha Administrativa   |  
===========================
`)

let senhaGer = 5555

senha = parseInt(input.question('Digite a senha: '))

while (senha != senhaGer){  
console.log (`
---------------------------------
Senha Incorreta, tente novamente
---------------------------------
`)
senha = parseInt(input.question('Digite a senha: '))
if (senha === senhaGer)
acessoAdm = bancoCad.filter(elemento => elemento)
  }

  
}

//========================================================================================================================


let validAcesso
let opcaoMenu
let valDep
let valSaque
let valTransf
let contaTransf
let filterConta
let solicitaEmp
let valorEmp
let acessoAdm
let senha
let opcaoGer
let empSolic
let autEmpConta
//let autEmp
let aprova

while (opcaoMenu != 4){
  console.log(menu)
  opcaoMenu = parseInt(input.question('Digite uma opcao: '))
  
  if(opcaoMenu === 1){
    bancoCad.push(newUser())
    input.question()    
  }
  else if (opcaoMenu === 2){
    
      if (validaAcesso() == true)

        while (opcaoMenu != 6){
        console.log(menu_cc)
        opcaoMenu = parseInt(input.question('Digite uma opcao: '))
        

        if (opcaoMenu === 1){        
            console.log(`
            -----------------------------
            >>> O seu saldo é: R$ ${validAcesso[0].valor}
            -----------------------------
            `)
        }
        else if (opcaoMenu === 2){           
            valDep = parseFloat(input.question('Informe um valor para deposito: ')) 
            validAcesso[0].valor += valDep
            console.log(`
            -------------------------------
            >>> O deposito foi efetuado <<<
            -------------------------------
            `)                    
        }       
         
        else if (opcaoMenu === 3){
            valSaque = parseFloat(input.question('Informe um valor para saque: ')) 
            validAcesso[0].valor -= valSaque
            console.log(`
            ------------------------------------------------------
            >>> O saque foi liberado, retire o dinheiro abaixo <<<
            ------------------------------------------------------
            `)         
        }

        else if (opcaoMenu === 4){
            contaTransf = parseInt(input.question('Digite a conta que deseja transferir: '))
            valTransf = parseInt(input.question('Digite o valor para transferencia: '))
            filterConta = bancoCad.filter(elemento => elemento.conta == contaTransf)
            validAcesso[0].valor -= valTransf
            filterConta[0].valor += valTransf
            console.log(`
            ------------------------------
            >>>Transferência concluída <<<
            ------------------------------
            `)
            
        }

        else if (opcaoMenu === 5){
  console.log(`
  ================================================
  Ola ${validAcesso[0].nome}, as taxas de juros para emprestimos
  sao de 3.5% a.m, deseja continuar? S ou N ?  
  ================================================
  `)
  solicitaEmp = input.question('Escolha uma opcao: ').toUpperCase()        
  
         
            if (solicitaEmp == 'S'){
            valorEmp = parseInt(input.question('Digite o valor desejado: R$ '))
  console.log(`
  ===============================================
  O valor foi solicitado, em caso de aprovacao
  o valor será disponibilizado na conta corrente.
  ===============================================
  `)
  validAcesso[0].emprestimo = 'S'

  console.log('Aperte entra para continuar')
            }
            else if (solicitaEmp == 'N') break            
          
        }

        input.question()
      }
      else console.log(`

      >>> Dados Incorretos, tente novamente! <<<

      `)
      
  }
  else if (opcaoMenu === 3){
    acessoGerencia()
    console.log(menuGer)
    opcaoGer = parseInt(input.question(`Escolha uma das opcoes: `))
    while(opcaoGer != 2){
      if (opcaoGer === 1){
        empSolic = bancoCad.filter(elemento =>{ 
         if (elemento.emprestimo === 'S') 
            return console.log(`

            A solicitação está aguardando aprovacao:
            =========================
            Nome: ${elemento.nome}
            Cpf: ${elemento.cpf}
            Conta: ${elemento.conta}
            Valor: ${elemento.valor}
            =========================
            `)                       
                  })
            autEmpConta = parseInt(input.question('digite a conta para liberar: '))
            aprova = bancoCad.filter(elemento => elemento.conta === autEmpConta)
            aprova[0].valor += valorEmp
            aprova[0].emprestimo = 'N'
            console.log('Emprestimo liberado')
            break         
            }
          
        else if(opcaoGer === 2){console.log('Acesso concluido')}     
        }
  }

  else if (opcaoMenu === 4){
    console.log(`
    ----------------------------
    >>> Acesso Encerrado <<<
    ----------------------------
    `)
    
  }
  else {console.log(`
 
  >>> Opcao invalida, tente novamente! <<<
 
  `)}
  
}






arquivo.writeFileSync('dados.json', JSON.stringify(bancoCad))







