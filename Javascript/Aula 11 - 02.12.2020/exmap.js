// Exercicio 001 -----------------------------------------------------------------------------------------------------------------------------

// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

//     5% para produtos abaixo de R$ 200,00

//     10% para produtos abaixo de R$ 400,00

//     15% para produtos abaixo de R$ 2000,00

//     20% para produtos acima de R$ 2000,00

//     Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

//     Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

// const input = require('readline-sync')

// let preco = []

// for (let c = 0; c < 10; c++){
//   let valor = parseInt(input.question('Digite um preco de produto: '))
//   preco.push(valor)
// }

// console.log(preco)

// const desc = preco.map(desconto => {
//   if (desconto < 200 ) desconto = desconto * 0.95
//   else if (desconto < 400) desconto = desconto * 0.9
//   else if (desconto < 2000) desconto = desconto * 0.85
//   else desconto = desconto - 0.8
//   return desconto
// }

//   )

// console.log(desc)

// Exercicio 002 -----------------------------------------------------------------------------------------------------------------------------

// Questão 02

// Crie um script para receber dois arrays informados pelo usuário. Em ambos os casos, não existe um número definido de números para os arrays, portanto, receba os números, até que o usuário informe um valor negativo.

// Com os dois arrays, utilize a função map para multiplicá-los, elemento a elemento. É possível que os arrays tenham tamanhos diferentes, certo? Por isso, o array resultante deverá ter o tamanho do menor dos arrays.

// Exemplo 01:

// Entrada 		Saída
// [1, 2, 3] 		[1, 4, 9]
// [1, 2, 3, 4] 	

// Exemplo 02:

// Entrada 		Saída
// [5, 7, 3] 		[10, 14]
// [2, 2] 		

// const input = require ('readline-sync')

// let vet1 = []
// let vet2 = []

// while (true){
//   let num = parseInt(input.question('Digite um numero: '))
//     if (num >= 0 && num % 2 === 0){
//       vet1.push(num)
//     }
//     else if (num >= 0 && num % 2 !== 0){
//       vet2.push(num)
//     }      
//     else {
//       console.log(`
      
//       -------------------
//       Vetores Finalizados
//       -------------------
      
//       `)
//       break      
//     }  
// }

// const compara = (vet1, vet2) => {  
//   if (vet1.length < vet2.length) return vet1
//   else    return vet2
//   }

// const mult = (vet1, vet2) => compara(vet1,vet2).map((num,index) =>{
//   if (compara(vet1,vet2) === vet1) return num*vet2[index]
//   else return num*vet1[index]
// })
  


// console.log(vet1)
// console.log(vet2)

// console.log(mult(vet1, vet2))


// Exercicio 003 -----------------------------------------------------------------------------------------------------------------------------

// Crie uma função para gerar um número inteiro aleatório entre -10 e 10. Em seguida, utilize a função map e a função criada para construir um array com 20 números inteiros aleatórios entre -10 e 10.


// const num_int = () => Math.floor(Math.random()*21)-10

// let vetor = new Array(20).fill(1)

// vetor = vetor.map(num_int)

// console.log(vetor)


// Exercicio 004 -----------------------------------------------------------------------------------------------------------------------------


// O objeto abaixo é formado pelo nome (name), idade (age), peso (weight) e altura (height) de 5 pessoas.

/*Utilize a função map para adicionar outros dois campos ao objeto acima:

    bmi: que contém o IMC (Body Mass Index ou Índice de Massa Corporal) da pessoa (float)
    classification: uma classificação simples do IMC da pessoa. Insira a string 'fora da faixa Normal', caso a pessoa tenha um IMC abaixo de 18,5 ou acima de 25. Insira a string 'Normal', caso a pessoa tenha um IMC entre 18,5 e 25.*/


//     const people = [
//       {
//           name: "Angelina Jolie",
//           age: 80,
//           weight: 55,
//           height: 1.79
//       },
//       {
//           name: "Eric Jones",
//           age: 28,
//           weight: 100,
//           height: 1.6
//       },
//       {
//           name: "Paris Hilton",
//           age: 34,
//           weight: 79,
//           height: 1.65
//       },
//        {
//            name: "Kayne West",
//            age: 26,
//            weight: 83,
//            height: 1.83
//        },
//        {
//            name: "Bob Ziroll",
//            age: 90,
//            weight: 60,
//            height: 1.65
//        }
//      ]

// const vet_atualizado = people.map((num, index, vet) => ({
//   ...num,
//   imc: parseFloat((num.weight / num.height**2).toFixed(2)),
//   classification1: parseFloat((num.weight / num.height**2).toFixed(2)) < 18.5 || parseFloat((num.weight / num.height**2).toFixed(2)) > 25 ? 'Fora da Faixa' : 'Normal',
// }))

// console.log(vet_atualizado)


// Exercicio 005 -----------------------------------------------------------------------------------------------------------------------------

  
// O array abaixo consiste em uma matriz cujas linhas são compostas por 3 dados de usuários de uma rede social: id, e-mail e país de origem, nessa ordem.

// Para ficar melhor de utilizar os dados dessa matriz, utilize a função map para transformá-la em um array de objetos com os campos id, email e country.



// const customers = [
//   [1, 'isidro_von@hotmail.com', 'Switzerland'],
//   [2, 'frederique19@gmail.com', 'Democratic People´s Republic of Korea'],
//   [3, 'fredy54@gmail.com', 'Tunisia'],
//   [4, 'braxton29@hotmail.com', 'Egypt'],
//   [5, 'josh_batz60@gmail.com', 'Serbia'],
//   [6, 'emie_corkery82@yahoo.com', 'Brazil']
// ];


// const clientes = customers.map((usuario, index, vet) => {  
//   let vet_obj = {
//     id:usuario[0],
//     email: usuario[1],
//     país: usuario[2]
//   }
//   return vet_obj     

//   })


// console.log(clientes)


// Exercicio 006 -----------------------------------------------------------------------------------------------------------------------------

// Os dados do objeto abaixo foram obtidos por meio de uma requisição a uma API que nos fornece os dados dos posts de um blog, os quais estão armazenados em um banco de dados:

// Observe que cada post contém um id, título (title), conteúdo (content) e autor (author).

// Para renderizar essas informações no front-end da página inicial do blog, o programador (você!) deseja colocar o nome do autor em caixa alta (já que ele vai ficar bem pequeno abaixo do título) e utilizar apenas os 300 primeiros caracteres do conteúdo do post, afinal, a ideia é que o usuário tenha apenas uma noção do conteúdo daquele post (imagine que o conteúdo do post é enorme).

// Utilize a função map para aplicar essa transformação no objeto acima.


const posts = [
  {
    id: 0,
    title: 'Programação Funcional',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Gabriel Millitelo'
  },
  {
    id: 1,
    title: 'Funções de Alta Ordem',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Lucas Maia'
  },
  {
    id: 2,
    title: 'Funções de Alta Ordem de Arrays',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Felipe Cabral'
  },
  {
    id: 3,
    title: 'Função map()',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: 'Walisson Silva'
  }
]


const atualiza_posts = posts.map((post, index, vet) => {
  
  let posts_atualizado = {
  id: post.id,
  title: post.title,
  content: post.content.slice(0,300),
  author: post.author.toUpperCase()}

  return posts_atualizado
  
})

console.log(atualiza_posts)
