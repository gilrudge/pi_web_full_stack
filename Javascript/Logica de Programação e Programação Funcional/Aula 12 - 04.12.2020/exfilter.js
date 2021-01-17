// Exercicio 001 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor numérico, filtre os elementos do vetor para conter apenas elementos maiores do que 5.

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtro_vet = vetor.filter((vet) => vet > 5)

console.log(filtro_vet)


// Exercicio 002 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.


let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtro_par = vetor.filter((vet) => vet % 2 === 0)


console.log(filtro_par)


// Exercicio 003 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.

let vet_string = ['barnabé', 'aristides', 'bala', 'pé', 'boneco', 'jogo']

const filtra_vet = vet_string.filter((vet) => vet.length < 5)

console.log(filtra_vet)

// Exercicio 004 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de objetos que representam pessoas, filtre as pessoas que não fazem parte do clube.

//  const people = [
//    { name: "Angelina Jolie", member: true },
//    { name: "Eric Jones", member: false },
//    { name: "Paris Hilton", member: true },
//    { name: "Kayne West", member: false },
//    { name: "Bob Ziroll", member: true }
//  ]


const filtro_people = people.filter((pessoa) => ! pessoa.member)


console.log(filtro_people)


// Exercicio 005 -------------------------------------------------------------------------------------------------------------------------------

// Faça um vetor filtrado somente com as pessoas que podem assistir o filme The Matrix (maiores de 18 anos).

// const people = [
//   { name: "Angelina Jolie", age: 80 },
//   { name: "Eric Jones", age: 2 },
//   { name: "Paris Hilton", age: 5 },
//   { name: "Kayne West", age: 16 },
//   { name: "Bob Ziroll", age: 100 }
// ]


const maior = people.filter((pessoa) => pessoa.age > 18)

console.log(maior)

// Exercicio 006 -------------------------------------------------------------------------------------------------------------------------------


// Utilize filter para selecionar todos os números primos do array.

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


 const primos = array.filter((num) => {
   num  = Math.abs(num)
   let count = 0
   for (let c = 1; c <= num; c++){
     if(num % c === 0)  count ++    
   }
   return (count === 2)
 })

 console.log(primos)

// Exercicio 007 -------------------------------------------------------------------------------------------------------------------------------

// Utilize filter para retornar um novo array sem números repetidos.

 const numeros = [1,2,3,2,1,3,3,5,4,6]

 const filtraNum = numeros.filter((num, index, vetor) => vetor.indexOf(num) === index)

 console.log(filtraNum)


// Exercicio 008 -------------------------------------------------------------------------------------------------------------------------------

// Utilize o método filter para determinar quais restaurantes estão abertos no horário atual.

// Dica: utilize new Date().getHours() para retornar o horário atual.

const restaurantes = [
  {
    nome: 'Pizzaria do Mario',
    horario_abertura: 14,
    horario_fechamento: 23
  },
  {
    nome: 'Churrascaria do Ronaldo',
    horario_abertura: 11,
    horario_fechamento: 14,
  },
  {
    nome: 'Bar do Zeca',
    horario_abertura: 12,
    horario_fechamento: 2,
  },
  {
    nome: 'Doceria da Mara',
    horario_abertura: 8,
    horario_fechamento: 20,
  },
]


const filtraHora = restaurantes.filter((num, index, vetor) => {
  let hora = new Date().getHours()
  return (num.horario_abertura < hora && num.horario_fechamento > hora)
})


console.log(filtraHora)



