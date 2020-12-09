// Exercicio 001 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor numérico, filtre os elementos do vetor para conter apenas elementos maiores do que 5.

// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filtro_vet = vetor.filter((vet) => vet > 5)



// console.log(filtro_vet)


// Exercicio 002 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.


// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filtro_par = vetor.filter((vet) => vet % 2 === 0)


// console.log(filtro_par)


// Exercicio 003 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.

// let vet_string = ['barnabé', 'aristides', 'bala', 'pé', 'boneco', 'jogo']

// const filtra_vet = vet_string.filter((vet) => vet.length < 5)

// console.log(filtra_vet)

// Exercicio 004 -------------------------------------------------------------------------------------------------------------------------------

// Dado um vetor de objetos que representam pessoas, filtre as pessoas que não fazem parte do clube.

//  const people = [
//    { name: "Angelina Jolie", member: true },
//    { name: "Eric Jones", member: false },
//    { name: "Paris Hilton", member: true },
//    { name: "Kayne West", member: false },
//    { name: "Bob Ziroll", member: true }
//  ]


//  const filtro_people = people.filter((pessoa) => ! pessoa.member)


//  console.log(filtro_people)


// Exercicio 005 -------------------------------------------------------------------------------------------------------------------------------

// Faça um vetor filtrado somente com as pessoas que podem assistir o filme The Matrix (maiores de 18 anos).

// const people = [
//   { name: "Angelina Jolie", age: 80 },
//   { name: "Eric Jones", age: 2 },
//   { name: "Paris Hilton", age: 5 },
//   { name: "Kayne West", age: 16 },
//   { name: "Bob Ziroll", age: 100 }
// ]


// const maior = people.filter((pessoa) => pessoa.age > 18)

// console.log(maior)

// Exercicio 006 -------------------------------------------------------------------------------------------------------------------------------


// Utilize filter para selecionar todos os números primos do array.

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];




const primo_array = array.filter((primo, index) => {
  let vet = []
  for (let c = 1; c < primo.length; c++){
    if (primo % c === 0){
      vet.push(primo)
    }
  }
  return vet
  }
)
  

console.log(primo_array)