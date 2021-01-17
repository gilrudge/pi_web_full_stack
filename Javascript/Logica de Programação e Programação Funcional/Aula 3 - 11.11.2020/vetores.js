let vetor = [1, "texto", true, 1.4,[1,2,3]]
// vetor[0] = 2
// console.log(vetor[4])

let vetor2 = [6,3,8,0]

// vetor2.push(9) // add valores no final do vetor
// vetor2.push(2)
// vetor2.unshift(-1) // add valores no inicio do vetor


// console.log(vetor2)
// console.log(vetor2[vetor2.length-1])

let vetor3 = []
let count = 1

while(count <= 10){
    vetor3.push(count)
   count++;
 }

// vetor3.pop() //remove o último elemento por padrão
// console.log(vetor3)

// vetor3.shift() //remove o primeiro elemento do vetor
// console.log(vetor3)

let vetor4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let subvetor = vetor4.slice(3, 5)
console.log(subvetor)
console.log(vetor4)


console.log(vetor4.includes(7)) // retorna true ou false se o elemento existir ou não dentro do vetor

//console.log(vetor4[10].includes(3))
console.log(vetor4.indexOf(5))
console.log(vetor4.lastIndexOf(5))


let vetor5 = vetor4.concat(vetor3).concat(vetor2)

console.log(vetor5)
console.log(vetor4)


let subvetor2 = vetor4.splice(3, 2)//retira o elemento de determinada posição
console.log(subvetor2)
console.log(vetor4)




