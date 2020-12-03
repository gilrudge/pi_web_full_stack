//Exercicio 1 ---------------------------------------------------------------------------------

/*Crie um vetor qualquer e faça um programa que imprima cada elemento do vetor usando o for*/

// let vetor1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//console.log(vetor1)

// for (let v of vetor1){
//    console.log(v)
//  }

//Exercicio 2 ---------------------------------------------------------------------------------

// Faça um programa que imprima todos os itens de um vetor usando while e compare com o exercício 1.

// let vetor2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let count = 0

// while(count <= vetor2.length){
//    console.log(vetor2[count])
//    count += 1
  
//  }

//Exercicio 3 ---------------------------------------------------------------------------------

// Faça um programa que peça para o usuário digitar um número n e imprima um vetor com todos os números de 0 a n-1.

// Exemplo: se o usuário digitar 5, o programa deve imprimir [0, 1, 2, 3, 4]

// const input = require('readline-sync')

// let num = parseInt(input.question('Digite um numero: '))

// let vetor3 = []

// count = 0

// while (count < num) {
//   vetor3.push(count)
//   count++
  
// }

// console.log(vetor3)

//Exercicio 4 ---------------------------------------------------------------------------------

// Faça um programa que olhe todos os itens de um vetor e diga quantos deles são pares.

// let vetor4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let count = []

// for (let par of vetor4) {

//   if (par % 2 == 0)
//   count.push(par)

  
// }

// console.log(count)
// console.log('O numero de elementos pares é: ',count.length)


//Exercicio 5 ---------------------------------------------------------------------------------

// Faça um programa que imprima o maior número de um vetor.

// let vetor5 = [0, 500, 75, 3, 1578, 5, 9966, 7, 8, 9]

// let maior = 0

// for (let c of vetor5) {

//   if (c > maior)
//   maior = c
  
// }
// console.log(`O numero maior é: ${maior}`)


//Exercicio 6 ---------------------------------------------------------------------------------

// Faça um programa que, dadas dois vetores de mesmo tamanho, crie um novo vetor com cada elemento igual a soma dos elementos do vetor 1 com os do vetor 2, na mesma posição.

// Exemplo:

// Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]



// let vetor61 = [12, 10, 25, 8, 15, 6]
// let vetor62 = [20, 35, 50, 80, 15, 10]

// let vetor63 = []

// for (let soma = 0; soma < vetor61.length; soma++){
//   vetor63.push(vetor61[soma]+vetor62[soma])
// }
// console.log(vetor61)
// console.log(vetor62)
// console.log(vetor63)


//Exercicio 7 ---------------------------------------------------------------------------------

// Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.

// OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 pelo número na posição i do vetor2.


// let vetor71 = [10, 5, 6, 2, 7, 9]
// let vetor72 = [2, 5, 4, 3, 8, 9]

// let vetor73 = []
// let calc = 0


// for (let mult = 0; mult < vetor71.length; mult++) {
//   vetor73.push(vetor71[mult]*vetor72[mult])

// }

// for (let soma of vetor73){
//   calc += soma
// }
// console.log(vetor73)
// console.log(`O valor total é: ${calc}`)

//Exercicio 8 ---------------------------------------------------------------------------------

// Faça um programa que pede para o usuário digitar 5 números e, ao final, imprime um vetor com os 5 números digitados pelo usuário (sem converter os números para o tipo number).

// Exemplo: Se o usuário digitar 1, 5, 2, 3, 6, o programa deve imprimir o vetor [‘1’,‘5’,‘2’,‘3’,‘6’]

// const input = require('readline-sync')

// let vetor = []

// for (let c = 0; c < 5; c++){
//    let num = input.question('Digite um numero: ')
//    vetor.push(num)
//  }
//  console.log(vetor)

//Exercicio 9 ---------------------------------------------------------------------------------

// Pegue a lista gerada no exercício anterior e transforme cada um dos itens desse vetor em um number.

// OBS: Não é para alterar o programa anterior, mas sim o vetor gerado por ele.


// let vet = []
// for (let i of vetor){
//   vet.push(parseInt(i))
// }
// console.log(vet)


//Exercicio 10 ---------------------------------------------------------------------------------

// Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando vetores.

// const input = require('readline-sync')

// let vetor10 = []

// let soma = 0

// for (let c = 0; c < 4; c++){
//   let nota = parseFloat(input.question("Digite uma nota: "))
//   vetor10.push(nota)
// }

// for (let media of vetor10){
//   soma += media
// }
// console.log(vetor10)
// console.log(`A sua média anual é: ${soma/4}`)

//Exercicio 11 ---------------------------------------------------------------------------------


// Sorteie um vetor de 10 números e imprima:

// a. um vetor com os 4 primeiros números;

// b. um vetor com os 5 últimos números;

// c. um vetor contendo apenas os elementos das posições pares;

// d. um vetor contendo apenas os elementos das posições ímpares;

// e. um vetor inverso do vetor sorteado (isto é, um vetor que começa com o último elemento o vetor sorteado e termina com o primeiro);

// f. um vetor inverso dos 5 primeiros números;

// g. um vetor inverso dos 5 últimos números.



// let vetor11 = []

// for (let c = 0; c < 10; c++){
//   let vet = Math.floor(Math.random()*101)
//   vetor11.push(vet)
// }

// console.log(`Os numeros sorteados sao: ${vetor11}`)

// console.log(`Resposta A: ${vetor11.slice(0,4)}`)
// console.log(`Resposta B: ${vetor11.slice(5,10)}`)

// let ipares = []
// for (let d = 0; d < vetor11.length; d += 2){
//   ipares.push(vetor11[d])
// }

// console.log(`Resposta C: ${ipares}`)

// let iimpares = []
// for(let e = 1; e < vetor11.length; e += 2){
//   iimpares.push(vetor11[e])
// }

// console.log(`Resposta D: ${iimpares}`)

// let contra = []
// for (let f = vetor11.length-1; f >= 0; f--){
//   contra.push(vetor11[f])  
// }

// console.log(`Resposta E: ${contra}`)

// console.log(`Resposta F: ${contra.slice(0,5)}`)
// console.log(`Resposta G: ${contra.slice(5,10)}`)


//Exercicio 12 ---------------------------------------------------------------------------------

// Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.


// let vetor12 = []

// for (let h = 0; h < 10; h++){
//   let vet1 = Math.floor(Math.random()*101)
//   vetor12.push(vet1)
// }
// console.log(`Os numeros sorteados sao: ${vetor12}`)


// let vetor121 = []
// for (let g = 0; g < vetor12.length; g++){
//   if (vetor12[g] >= 50){
//     vetor121.push(vetor12[g])
//    }
//   }

//   console.log(`Os numero maiores que 50 sao: ${vetor121}`)


//Exercicio 13 ---------------------------------------------------------------------------------

// Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

// a. o maior número sorteado;

// b. o menor número sorteado;

// c. a média dos números sorteados;

// d. a soma dos números sorteados.


// let vetor13 = []

// for (let i = 0; i < 10; i++){
//   let sorteio = Math.floor(Math.random()*101)
//   vetor13.push(sorteio)
  
// }

// console.log(`Os numeros sorteados sao: ${vetor13} `)

// //Resposta A
// let nvetmaior = 0

// for (let j = 0; j < vetor13.length; j++){ //////////////////////////////////////////////////////////////////
//   if(vetor13[j] > nvetmaior){
//   nvetmaior = vetor13[j]
//   }   
// }
// console.log(`Resposta A - O numero maior sorteado é: ${nvetmaior}`)

// // Resposta B

// let nvetmenor = vetor13[0]

// for(let k = 0; k < vetor13.length; k++){
  
//   if(vetor13[k] < nvetmenor){
//     nvetmenor = vetor13[k]
//   }
// }
// console.log(`Resposta B - O numero menor sorteado é: ${nvetmenor}`)

// // Resposta C
// // Resposta D

// let media = 0
// let soma = 0
// for (let l = 0; l < vetor13.length; l++){
//   soma += vetor13[l] 
// }


// console.log(`Resposta C - A média dos numeros sorteados é: ${soma/vetor13.length}`)
// console.log(`Resposta D - A soma dos numeros do vetor é ${soma}`)

//Exercicio 14 ---------------------------------------------------------------------------------

// Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno e o número de provas que esse aluno fez. Depois, o programa deve pedir para o usuário digitar as notas de cada prova do aluno. Ao final o programa deve imprimir um vetor contendo:

// a. Nome do aluno na posição 0;

// b. Idade do aluno na posição 1;

// c. Um vetor com todas as notas na posição 2;

// d. A média do aluno na posição 3;

// e. true ou talse, caso a média seja maior que 5 ou não, na posição 4.

// Dica: Use o que você fez nos exercícios anteriores para criar esse programa.

// const input = require('readline-sync')

// let dados = []
// let nome = input.question('Digite o nome do aluno: ')
// dados.push(nome)
// let idade = parseInt(input.question('Digite a idade do aluno: '))
// dados.push(idade)
// let qtdprova = parseInt(input.question('Digite a quantidade de provas do aluno: '))
// let boletim = []


// for (let m = 0; m < qtdprova; m++){
//   let nota = parseInt(input.question('Digite a nota da prova: '))
//   boletim.push(nota)

// }

// dados.push(boletim)


// let soma = 0
// for (let n = 0; n < boletim.length; n++){
//   soma += boletim[n]
// }
// let media = soma/boletim.length
// dados.push(media)

// if(media >= 6){
//   dados.push('Aprovado')

// }else {
//   dados.push('Reprovado')
// }

// console.log(dados)



//Exercicio 15 ---------------------------------------------------------------------------------

// Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar a maior e menor nota do aluno (nesse caso o número de provas precisa ser obrigatoriamente maior que dois).

// Dica: crie uma cópia com o vetor de todas as notas antes de fazer a média.

//  const input = require('readline-sync')

//  let dados = []
//  let nome = input.question('Digite o nome do aluno: ')
//  dados.push(nome)
//  let idade = parseInt(input.question('Digite a idade do aluno: '))
//  dados.push(idade)
//  let qtdprova = parseInt(input.question('Digite a quantidade de provas do aluno: '))
//  let boletim = []
//  let totalnotas = []

//   while (qtdprova <=2){
//     console.log('Digite um valor maior que 2.')
//     qtdprova = parseInt(input.question('Digite a quantidade de provas do aluno: '))
//   }

  
  
//   for (let m = 0; m < qtdprova; m++){
//     let nota = parseInt(input.question('Digite a nota da prova: '))
//     boletim.push(nota)
//     totalnotas.push(nota)
//   }

//   dados.push(boletim)
  
  
//   let notamaior = 0 
//   for (let y = 0; y <= boletim.length; y++){
//     if(boletim[y] > notamaior){
//       notamaior = boletim[y]
//     }
//   }
//   //let posmaior = boletim.indexOf(notamaior)

//   let notamenor = boletim[0]
//   for(let k = 0; k <= boletim.length; k++){
//     if(boletim[k] < notamenor)
//     notamenor = boletim[k]
//   }
//   //let posmenor = boletim.indexOf(notamenor)

//   let soma = 0
//   for (let n = 0; n < boletim.length; n++){
//     soma += boletim[n]
//   }
//   let media = soma/boletim.length
//   dados.push(media)

//   if(media >= 6){
//     dados.push('Aprovado')

//   }else {
//     dados.push('Reprovado')
//   }
    
//   console.log(dados)

//   console.log(`A nota maior é: ${notamaior}`)
//   console.log(`A nota menor é: ${notamenor}`)
  
//   boletim.splice(boletim.indexOf(notamenor),1)
//   boletim.splice(boletim.indexOf(notamaior),1)
//   console.log(boletim)


//   let soma1 = 0
//   for (let n = 0; n < boletim.length; n++){
//     soma1 += boletim[n] ////////////////////////////////////////////////////////////////////////////////////////////
//   }
//   let media1 = soma1/boletim.length
//   dados.push(media1)


//   console.log(`A media sem a nota maior, ${notamaior} e sem a nota menor, ${notamenor} é: ${media1}`)
//   console.log(`O boletim com todas as notas é ${totalnotas}`)
  


//Exercicio 16 ---------------------------------------------------------------------------------

// Desafio 3 - Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. Para isso, primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e somar todas as respostas. O resultado deve ser multiplicado por 10 e dividido por 11. O resto dessa divisão deve ser igual ao primeiro dígito verificador (10º dígito). Em seguida, o programa deve multiplicar cada um dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o segundo dígito verificador.

// Exemplo:

// Se o CPF for 286.255.878-87 o programa deve fazer primeiro:  28625587887

//x = (2*10 + 8*9 + 6*8 + 2*7 + 5*6 + 5*5 + 8*4 + 7*3 + 8*2)

// Em seguida, o programa deve testar se x*10%11 == 8 (o décimo número do CPF). Se sim, o programa deve calcular:

// x = (2*11 + 8*10 + 6*9 + 2*8 + 5*7 + 5*6 + 8*5 + 7*4 + 8*3 + 8*2)

// e verificar se x*10%11 == 7 (o décimo primeiro número do CPF).

const input = require('readline-sync')

let verif1 = [10, 9, 8, 7, 6, 5, 4, 3, 2] 
let verif2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
let mult1 = []
let mult2 = []
let soma1 = 0
let soma2 = 0

let cpf = input.question('Digite o seu CPF apenas com numeros: ')

for (let v1 = 0; v1 <= cpf.length-3; v1++){
  mult1.push(cpf[v1]*verif1[v1])
  
}

for (let v2 = 0; v2 <= cpf.length-2; v2++){
  mult2.push(cpf[v2]*verif2[v2])
  
}

for (let s1 = 0; s1 < mult1.length; s1++){
  soma1 += mult1[s1]
}

for (let s2 = 0; s2 < mult2.length; s2++){
  soma2 += mult2[s2]
}



console.log(`O cpf é: ${cpf}`)
console.log(`O verificador 1 é: ${verif1}`)
console.log(`A verificação 1 é: ${mult1}`)

console.log(`O verificador 2 é: ${verif2}`)
console.log(`A verificação 2 é: ${mult2}`)

console.log(`A soma 1 é: ${soma1}`)
console.log(`A soma 2 é: ${soma2}`)

console.log(soma1*10%11==cpf[9])
console.log(soma2*10%11==cpf[10])

console.log(cpf[9])
console.log(cpf[10])

if(soma1 * 10 % 11 == cpf[9] && soma2 * 10 % 11 == cpf[10]){
  console.log('O CPF é válido')
}else {
  console.log('CPF incorreto')
}

console.log(soma1 * 10 % 11)
console.log(soma2 * 10 % 11)