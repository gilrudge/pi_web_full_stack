let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
// percorrer linhas e itens de linha em matrizes
for ( let i = 0; i < matriz.length; i++){
  for (let j = 0; j < matriz[i].length; j++){
    //console.log(matriz[i][j])
  }
  
}


let vetor = [1, 2, 3, 4, 5, 6, 7, 8]
let [primeiro, segundo, ...resto] = vetor
console.log(primeiro)
console.log(segundo)
console.log(resto)
console.log(vetor)

function vector_sum(vector){
  
  if (vector.length === 0) return 0
  const [head, ...tail] = vector
  return head + vector_sum(tail)
}

console.log(vector_sum([1,2,3]))

let vetor2 = [...vetor, 9, 10, 11, 12]

console.log(vetor2)

