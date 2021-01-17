let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let soma = vetor.reduce(
  (state, num) => state + num
)

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
]

soma = matrix.reduce(
  (state, line) => [state[0]+line[0], state[1]+line[1], state[2]+line[2]] 
  
  )

console.log(soma)


const alunos = [
  {nome: 'Lucas', nota: 4},
  {nome: 'Natallia', nota: 10},
  {nome: 'Gil', nota: 10},
  {nome: 'Roberson', nota: 10},
]

let notaTotal = alunos.reduce((notaAcumulada, aluno) => notaAcumulada + aluno.nota, 0)

console.log(notaTotal)


let aprovados = alunos.reduce((aprovadosParcial, aluno) => aluno.nota > 6 ? [...aprovadosParcial, aluno.nome] : aprovadosParcial, [])

console.log(aprovados)


