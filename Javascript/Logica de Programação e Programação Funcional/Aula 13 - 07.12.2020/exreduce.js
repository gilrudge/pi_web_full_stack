// Exercicio 001 ------------------------------------------------------------------------------------------------------------------------------

// Use a função reduce para fazer a soma de todos os elementos de um vetor numérico


// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const soma = vetor.reduce((state, elemento) => state + elemento)

// console.log(soma)


// Exercicio 002 ------------------------------------------------------------------------------------------------------------------------------

// Use a função reduce para transformar um vetor numérico em uma string com todos os números como caractéres.

// [1, 2, 3, 4] -> "123"

 let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const vet_str = vetor.reduce((base, elemento)=> base + elemento.toString(), '')

 console.log(vet_str)

// Exercicio 003 ------------------------------------------------------------------------------------------------------------------------------

// Transforme o vetor de eleitores em uma contagem de quantas pessoas parcitiparam na votação.

// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ]

 const eleitores = voters.reduce((base, elemento, index, vet) => elemento.voted ? base + 1 : base, 0)

 console.log(eleitores)


// Exercicio 004 ------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de produtos que tem interesse em comprar, calcule quanto custaria comprar todos os produtos a vista.

// const products = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];


// const compra = products.reduce((base, elemento) => base + elemento.price,0)

// console.log(`O valor total da compra é ${compra}`)


// Exercicio 005 ------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

// const vetor = [["1", "2", "3"],[true], [4, 5, 6]]     //["1", "2", "3", true, 4, 5, 6]

// //resp 1
// const une = vetor.reduce((base, elemento) => [...base , ...elemento])

// console.log(une)

// //resp 2
// const une1 = vetor.reduce((base,elemento) =>{
//   for (let i of elemento) base.push(i)
//   return base
// }

// ,[])

// console.log(une1)


// Exercicio 006 ------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de eleitores em potencial, retorne um objeto representando quantos votaram por faixa etária. Agrupar as idades 18-25, 26-35, 36-55 e as demais idades.

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted: true},
  {name:'Tami' , age: 54, voted: true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]

/* Resultado:
{ 
  numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/


// const idade_voto = voters.reduce((base, elemento)=>{

//       if (elemento.age >= 18 && elemento.age <=25) {
//         base.faixa1825++
//         if (elemento.voted) base.faixa1825_votos++}
      
//       else if (elemento.age >= 26 && elemento.age <=35){
//          base.faixa2635++
//         if(elemento.voted) base.faixa2635_votos++}
      
//       else if (elemento.age >= 36 && elemento.age <=55){
//          base.faixa3655++
//         if (elemento.voted) base.faixa3655_votos++}
      
//       else {
//         base.demais++
//         if (elemento.voted) base.demais_votos}
      
//       return base
//     } 
    
//     ,{faixa1825: 0,faixa2635: 0,faixa3655: 0,demais: 0,
//     faixa1825_votos:0,faixa2635_votos:0,faixa3655_votos:0,demais_votos:0})

// console.log(idade_voto)

// Exercicio 007 ------------------------------------------------------------------------------------------------------------------------------

// Faça uma implementação das funções map e filter utilizando o reduce.

//let vetor = [2,3,4,5,6,7,8,9,10,11,12]

//map
//const alt_vet_map = vetor.reduce((base, elemento) => [...base, elemento**2],[])

//console.log(alt_vet_map)

//filter
//const alt_vet_filter = vetor.reduce((base, elemento, index, vetor) => {
//  let new_vector = []
//  for ( let i of vetor)
//    if (i % 2 === 0) 
//    new_vector.push(i) 
//   return new_vector

//},[])

//console.log(alt_vet_filter)

// Exercicio 008 ------------------------------------------------------------------------------------------------------------------------------

// Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// const soma_ma = matrix.reduce((base, elemento, index, vetor) => base + elemento[index] ,0)

// console.log(soma_ma)

// Exercicio 009 ------------------------------------------------------------------------------------------------------------------------------

// Faça uma função que recebe um argumento e um vetor de funções. Utilize o reduce para aplicar as funções sucessivamente no argumento. Isto é, a primeira função recebe o argumento e o seu retorno é enviado como argumento para a próxima função. O último valor é o retornado pela função.

const funcao1 = x => x ** 2

const funcao2 = y => y * 10

const vet_func = [funcao1, funcao2]


const alt_vet = vet_func.reduce((base, elemento) => elemento(base),2)


console.log(alt_vet)


//---------------------------------------------------------LUCAS----------------------------------------------------------------------
// Exercicio 007 lucas------------------------------------------------------------------------------------------------------------------------------
// Faça uma implementação das funções map e filter utilizando o reduce.

// function map(fn, vector){
//     return vector.reduce((state, elements) => [...state, fn(elements)], [])
//   }

//   let result = map(x => 2*x, [1, 2, 3, 4, 5, 6])

//   console.log(result)

//versao simplificada

//  function map (fn, vector) {
//    return vector.reduce( 
//      (state, element) => {
//        state.push(fn(element))
//        return state
//      }
//      , []  )
//  }


// function filter (fn, vector){
//   return vector.reduce( 
//     (state, element) => {
//       if (fn(element)) state.push(element)
//       return state
//     }
//     ,[])
// }

// result = filter(x => x % 2 === 0, [1, 2, 3, 4, 5, 6, 7, 8])
// console.log(result)

// function filter(fn, vector){
//   return vector.reduce ((state, element) => fn(element) ? [...state, element] : state, [])
// }

// Exercicio 005 lucas------------------------------------------------------------------------------------------------------------------------------


// Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

// let vector = [["1", "2", "3"],[true], [4, 5, 6]] 

// let newVector = vector.reduce(
//   (state, item) => {
//     newState = []
//     for (let i of state) newState.push(i)
//     for (let i of item) newState.push(i)
//     return state
//   }  
// )

//vector = [["1", "2", "3"],[true], [4, 5, 6]]

// newVector = vector.reduce((state, item) => [...state, ...item])

// console.log(newVector)

