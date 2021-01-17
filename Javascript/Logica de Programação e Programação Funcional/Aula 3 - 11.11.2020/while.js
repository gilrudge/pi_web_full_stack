/*const input = require('readline-sync')

let num = parseInt(input.question("Digite um numero: "));

let count = 0;
while (count <= num){
  console.log(count)
  count += 1
}

console.log('Fim do programa')*/



//Exercicio 001

/*1. Faça um algoritmo que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0.*/


/*const input = require('readline-sync');



let num = parseInt(input.question("Digite um numero: "))

while (num != 0) {
  num = parseInt(input.question("Digite um numero: "))
}

  if (num == 0){
    console.log('O programa terminou!')
  }*/

//Exercicio 002

/*2. Peça ao usuário para digitar um número n e some todos os números de 1 a n.*/

/*const input = require('readline-sync')

let num = parseInt(input.question("Digite um numero: "))

let count = 0
let soma = 0

while(count < num) {
  
  count += 1
  soma = soma + count
  console.log(count)
}

console.log(soma)*/

//Exercicio 003

/*3. Faça um programa que peça para o usuário digitar a idade, o salário e o sexo de uma pessoa até que as entradas digitadas sejam válidas:

    Idade: entre 0 e 150;
    Salário: maior que 0;
    Gênero: M, F ou Outro.*/

/*const input = require('readline-sync')

let idade = parseInt(input.question("Digite sua idade: "))
while(idade < 0 || idade > 150){
  idade = parseInt(input.question("Digite sua idade: "))
}

let salario = parseFloat(input.question("Digite seu salario: "))
while(salario < 0){
  salario = parseFloat(input.question("Digite seu salario: "))
}

let sexo = input.question("Digite o sexo: ")
while(sexo != 'M' && sexo != 'F' && sexo != 'Outro'){

  sexo = input.question("Digite o sexo: ")
}

console.log('Sua idade é: ',idade)
console.log('Seu salário é: ',salario)
console.log('Seu sexo é: ',sexo)*/


//Exercicio 004

/*4. Peça ao usuário para digitar um número e imprima o fatorial de n.*/

/*const input = require('readline-sync')

let num = parseInt(input.question('Digite um numero: '))

let count = 1

let mult = 1



while(count <= num){
  
  mult = mult * count
  console.log(count)
  count++;
}

console.log(`O Fatorial do numero digitado é: ${mult}`)*/


// Exercicio 005

// Calcule a soma de até mil termos da série 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...

//     Dica! Use três variáveis:

//         - um contador, que começa em zero;
//         - uma variável para a soma de todos os termos, que também começa em zero;
//         - uma variável para cada termo, que começa em 1 e a cada loop é dividida por 2.


const input = require('readline-sync')

let termos = 1

let sum = 0

let count = 0

while (count < 1000){
  count++

  sum = sum + termos

  termos = termos * 0.5
  
}

console.log(`O valor da conta é: ${sum}`)










