let vetor = [1, "texto", true, 1.4, [1, 2, 3]];

//console.log(typeof vetor);

let vetor2 = [6, 3, 8, 0];
// push adiciona um elemento ao final do vetor
//vetor2.push(9);
//vetor2.push(2);

// unshift adiciona um elemento no começo do vetor
//vetor2.unshift(-1)

//console.log(vetor2)
console.log(`Essa resposta: ${vetor2[vetor2.length-1]}`)

// [] é um vetor vazio
let vetor3 = []
let count = 1
while (count <= 10){
    vetor3.push(count)
    count++
}

// pop remove um elemento do final
vetor3.pop()
//console.log(vetor3)

// shift remove um elemento do final
vetor3.shift()
//console.log(vetor3)

let vetor4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let subvetor = vetor4.slice(3, 5)
console.log(subvetor)
console.log(vetor4)

// Retorna true se o elemento dentro do vetor, e false caso contrário
console.log(vetor4.includes(2))
console.log(vetor4.indexOf(5))
console.log(vetor4.lastIndexOf(5))

let vetor5 = vetor4.concat(vetor3).concat(vetor2)
console.log(vetor5)
console.log(vetor4)

let subvetor2 = vetor4.splice(5, 1, 8, 9, 10)
console.log(subvetor2)
console.log(vetor4)