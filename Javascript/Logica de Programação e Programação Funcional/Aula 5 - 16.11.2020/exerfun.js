// Exercicio 001 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um número e imprime seu dobro.

// const input = require('readline-sync')

// function dobro(num){
//   let d = num * 2
//   console.log(d)
// }

// let num = input.question('Digite um numero: ')
// dobro(num)





// Exercicio 002 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe o valor do raio de um círculo e retorna o valor do comprimento de sua circunferência: C = 2pir.

// const insira = require('readline-sync')

// function comp(){
//   let c = 2*3.14*raio
//   console.log(c)
// }

// let raio = insira.question("Digite o valor do raio: ")
// comp()





// Exercicio 003 -----------------------------------------------------------------------------------------------------

// Faça uma função para cada operação matemática básica (soma, subtração, multiplicação e divisão). As funções devem receber dois números e retornar o resultado da operação.

// const escreva = require('readline-sync')

// function sum(a,b){
//   let s = a + b
//   console.log(`A soma de ${a} + ${b} = ${s}`)
// }

// function mult(a,b){
//   let s = a * b
//   console.log(`A multiplicacao de ${a} * ${b} = ${s}`)
// }

// function div(a,b){
//   let s = a / b
//   console.log(`A divisao de ${a} / ${b} = ${s}`)
// }

// function sub(a,b){
//   let s = a - b
//   console.log(`A subtracao de ${a} - ${b} = ${s}`)
// }

// let a = parseInt(escreva.question("Digite o valor de A: "))
// let b = parseInt(escreva.question("Digite o valor de B: "))

// sum(a,b)
// mult(a,b)
// div(a,b)
// sub(a,b)




// Exercicio 004 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um nome e imprime “olá, [nome]”.

// const digite = require('readline-sync')

// function nome(name){
//   console.log(`Olá, ${name}!`)
// }

// let name = digite.question('Digite seu nome: ')
// nome(name)



// Exercicio 005 -----------------------------------------------------------------------------------------------------

/*Faça uma função que recebe um nome e um horário e imprime “Bom dia, [nome]”, caso seja antes de 12h, “Boa Tarde, [nome]”, caso seja entre 12h e 18h e “Boa noite, [nome]” se for após às 18h.
6*/

// const input = require('readline-sync')

// function time(){
//   if(hora < 12){
//     console.log(`Bom dia, ${nome}!`)
//   } else if (hora > 12 && hora < 18){
//     console.log(`Boa tarde, ${nome}!`)
//   }else {
//     console.log(`Boa noite, ${nome}!`)
//   }

//   }

// let nome = input.question('Digite seu nome: ')
// let hora = parseInt(input.question('Digite um horario: '))

// time()


// Exercicio 006 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um número e retorna true se ele é par ou false, se ele é ímpar.

// const input = require('readline-sync')

// function parimp(num){
//   return num % 2 === 0  
// }


// let num = parseInt(input.question('Digite um numero: '))
// console.log(parimp(num))


// Exercicio 007 -----------------------------------------------------------------------------------------------------

// Faça uma função que sorteia 10 números aleatórios entre 0 e 100 e retorna o maior entre eles.

  // const input = require('readline-sync')

  // let soma = 0
  // let numeros = []

  // function sorteio(soma){
  //   for(let c = 0; c < 10; c++){
  //     let sorteado = Math.floor(Math.random()*101)
  //     numeros.push(sorteado)    
  //   }
  
  //   for (let d = 0; d < numeros.length; d++) {
  //     if (numeros[d] > soma){
  //       soma = numeros[d]
  //     }
      
  //   }
  //   return soma
    
       
  //   }   

  // console.log(sorteio(soma))

 

// Exercicio 008 ----------------------------------------------------------------------------------------------------- REFAZER

// Faça uma função que recebe um número n de entrada, sorteia n números aleatórios entre 0 e 100 e retorna a média deles.


//  const input = require('readline-sync')

//  let valor = parseInt(input.question('Digite um numero: '))
//  let valores = []
//  let soma = 0

//  function media(valores){
//    for ( let c = 0; c < valor; c++){
//      let sorteio = Math.floor(Math.random()*101)
//      valores.push(sorteio)
//    }
//    for (let d = 0; d < valores.length; d++){
//      soma += valores[d]
//    }
//      let media1 = soma / valores.length
//      return media1
//  }

//  console.log(media(valores))

// Exercicio 009 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um vetor de palavras e retorna um vetor contendo as mesmas palavras do vetor anterior, porém escritas em caixa alta.

// const input = require('readline-sync')




// function palavras(vetor){  
//   for (let c = 0; c < vetor.length; c++){
//     vetor[c] = vetor[c].toUpperCase()   
//   } 
//    return vetor
//  }

// console.log(palavras(['gol', 'carro', 'bola']))


// Exercicio 010 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe dois vetores e retorna a soma item a item desses vetores.

// Exemplo: Se a função receber os vetores [1,4,3] e [3,5,1], então a função deve retornar [1+3, 4+5, 3+1] = [4, 9, 4].


// function sumvet(a,b){
//   let soma = []
//   for (let c = 0; c < a.length; c++){
//     soma.push(a[c] + b[c])
//   }
//    return soma 
// }

// console.log(sumvet([1,4,3],[3,5,1]))


// Exercicio 011 -----------------------------------------------------------------------------------------------------

// Faça uma função que receba dois vetores e retorne o produto item a item desses vetores.

// Exemplo: Se a função receber os vetores [1,4,3] e [3,5,1], então a função deve retornar [1x3, 4x5, 3x1] = [3, 20, 3].


//  function multvet(a,b){
//    let mult = []
//    for (let c = 0; c < a.length; c++){
//      mult.push(a[c] * b[c])
//    }
//     return mult 
//  }

//  console.log(multvet([1,4,3],[3,5,1]))


// Exercicio 012 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um número x e um vetor numérica e retorna um vetor cujos elementos são os itens do vetor de entrada multiplicado por x.

// Exemplo:

// Se a função receber o número 5 e o vetor [3,5,1], então a função deve retornar [5x3, 5x5, 5x1] = [15, 25, 5].

// const input = require ('readline-sync')

// function mult(num,vet){
//   let result = []
//   for (let c = 0; c < vet.length; c++){
//     result.push(num * vet[c])
//   }
//   return result
// }

// let num = parseInt(input.question('Digite um numero: '))
// let vet = [3,5,1]
// console.log(mult(num,vet))


// Exercicio 013 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um vetor de números e retorna a soma dos elementos desse vetor.

// function soma(sum){
//   let somavet = 0
//   for (let c = 0; c < sum.length; c++){
//     somavet += sum[c]

//   }

//   return somavet
// }

// console.log(soma([10,20,30]))



// Exercicio 014 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um vetor de números e retorna a média aritmética dos elementos desse vetor.

//  function media(vetor){
//    let media = 0
//    let soma = 0
//    for (let c = 0; c < vetor.length; c++){
//      soma += vetor[c]    
//    }
//    media = soma/vetor.length
//    return media
//  }

//  let vetor = [2,4,6]
//  console.log(media(vetor))

// Exercicio 015 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um número e retorna o número invertido.

// Exemplo x = 32243;
// Saída esperada: 34223

// const input = require('readline-sync')

// function numinvert(numero){
//   let vetor = numero.split('')
//   let vetor1 = []
//   let num = 0
//   for (let c = vetor.length-1; c >= 0 ; c--){
//     vetor1.push(vetor[c])
//     num = vetor1.join("")
//   }
// return num
// }
  


// let numero = input.question('Digite um numero: ')
// console.log(numinvert(numero))

// Exercicio 016 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe uma string como parâmetro e converte a primeira letra de cada palavra para maiúsculo.

// Exemplo: ‘the quick brown fox’
// Saída esperada: ‘The Quick Brown Fox’

// const input = require('readline-sync')

// function maius(frase){
//   let citacao = 0
//   let matriz = 0
//   let matriz1 = 0
//   let vetor = []
//   let vetfim = 0
//   let sep = frase.split(" ")
//   for (let c = 0; c < sep.length; c++){
//     citacao = sep[c]
//     matriz = citacao.slice(0,1).toUpperCase()
//     matriz1 = citacao.slice(1)
//     vetor.push(matriz+matriz1)        
//   }
//   vetfim = vetor.join(" ")
    
//   return vetfim

// }


// let frase = input.question('Digite uma frase: ')
// console.log(maius(frase))


// Exercicio 017 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um número e retorna um booleano representando se ele é primo ou não.

// const input = require('readline-sync')

// function num(primo){
//   let d = 0  
//   for ( let c = 1; c <= primo; c++){
      
//     if ( primo % c == 0){
//      d++
//     }   
    
//   }
//   return d === 2
// }

// let primo = parseInt(input.question("Digite um numero: "))
// console.log(num(primo))

// Exercicio 018 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe um argumento e retorna o seu tipo de dado (number, string, etc).

// const input = require('readline-sync')

// function tipo(type){
//   return typeof type
// }

// console.log(tipo(100))
// console.log(tipo(10.5))
// console.log(tipo('melao'))
// console.log(tipo(true))


// Exercicio 019 -----------------------------------------------------------------------------------------------------

// Faça um função que recebe um vetor de números e encontre o segundo menor e o segundo maior número, respectivamente.

// Exemplo: [1,2,3,4,5]
// Saída esperada: 2,4
// function compnum(a,b){
//   return a - b
// }

// function maimen2(vetor){
//   let vet1 = []
//   for ( let c = 0; c < vetor.length; c++){    
//     vetor.sort(function(a,b){return a - b })
//     if (!vet1.includes(vetor[c])){
//       vet1.push(vetor[c])
//     }         
//   }
//   return [vet1[1], vet1[vet1.length-2]]
// }
// let vetor = [4,7,90,8,85,77,8,7,7,7,7,8,8,8,85,85,85,155,79,5,5]

// console.log(maimen2(vetor))

// Exercicio 020 -----------------------------------------------------------------------------------------------------

//Faça uma função que recebe um vetor numérico e um número e retorne um vetor com os elementos maiores que esse número.

// const input = require('readline-sync')

// function maiores(num){
//   let vet1 = []

//   for(let c = 0; c <= vetor.length; c++){
//     if(num < vetor[c]){
//       vet1.push(vetor[c])
//     }
//   }
//   return vet1

// }


// let num = parseInt(input.question("Digite um numero: "))
// let vetor = [45,70,20,37,22,31,5,10,150,200,7,17]
// console.log(maiores(num))



// Desafio 1 -----------------------------------------------------------------------------------------------------

// Faça uma função que receba um número e calcule seu fatorial.

//   const input = require('readline-sync')

//    function fat(num){
//    let mult = 1
//    for (let c = 1; c <= num; c++){
//      mult *= c   
//    }
//    return mult
//  }

//  let num = parseInt(input.question('Digite um numero: '))
 //console.log(fat(num))


// Super Desafio 1 -----------------------------------------------------------------------------------------------------

// Repita o exercício anterior usando recursão, ou seja, uma função que chame ela mesma, lembrando que 3! = 3*2!, que 2! = 2*1!, que 1! = 1*0! e que 0! = 1.

// function recur(fat){
//   fat(num) 
//   return fat(num)
// }

// console.log(recur(fat))


// Desafio 2 -----------------------------------------------------------------------------------------------------

// Faça uma função que recebe duas entradas: um input dado pelo usuário e um string que informa o tipo de dado (“idade”, “salário” ou “sexo”), e verifica se os dados digitados foram válidos, usando os seguintes critérios:

// a. Idade: entre 0 e 150;

// b. Salário: maior que 0;

// c. Sexo: M, F ou Outro.