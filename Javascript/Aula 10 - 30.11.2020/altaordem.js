function sum(a, b){
  return a + b;
}


function apply(operation, a, b){
  return operation(a, b)
}


function sumX(x){
  return function (a){
    return a+x
  }
}

// const sum5 = sumX(5)
// const sum10 = sumX(10)
// console.log(sum5(10))
// console.log(sum10(10))



let user1 = {name: 'Lucas', age: 26}

function userFactory(name, age){
  return {
    name: name,
    age: age
  }
}

let user2 = userFactory('Luis', 20)
let user3 = userFactory('Lucas',26)

console.log(user2)
console.log(user3)

let book = {
  title: 'Lord of the Rings',
  author: 'Tolken',
  pages: 1000
}


function factoryCreator(obj){
  let keys = []
  if(arguments.length === 1 && typeof obj === 'object')
  for ( key in obj){
    keys.push(key)
  }
  else{
    for (arg of arguments){
      keys.push(arg)
    }
  }
  return function(){
    let new_obj = {}
    if (arguments.length === keys.length){
    for (let i = 0; i < keys.length; i++){
      new_obj[keys[i]] = arguments[i]
    }
  }
  else{
    throw Error('The number of arguments must equal the number of keys of the orginal object')
  }
    return new_obj
  }
}

function printArguments(){
  console.log(arguments)
}


const bookFactory = factoryCreator(book)


console.log(bookFactory('Sitio do Pica Pau Amarelo', 'Monteiro Lobato', 400))

const userFactory2 = factoryCreator(user1)

console.log(userFactory2('Luis',20))


const productFactory = factoryCreator('name', 'price', 'date')
console.log(productFactory('Processador Ryzen', 1100, '01/01/2022'))