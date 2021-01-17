let user = {
  name: 'Gil Blas',
  email: 'gilblas07@hotmail.com',
  password: '0000',
  age: 23,
  pets: [
    {species: 'canine', name: 'Sophia'},
    {species: 'feline', name: 'Mia'},

  ],
  speak: (person) => {
    console.log(`Olá, ${person}. Meu nome é ${user.name}`)
  }
}

user.speak('Natallia')
user.name = 'Gil Rudge'
user.speak('Mozao')
console.log(user.pets[0].name)

console.log(user)
user.isBrazilian = true
console.log(user)


for (let value of Object.values(user)){
  console.log(value)

}

console.log(Object.keys(user))

let { name, email } = user
console.log(email)


let user2 = {...user, email: 'gilblas07@gmail.com'}
