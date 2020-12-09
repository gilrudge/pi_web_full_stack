//resolução lucas------------------------------

const par = num => num % 2 === 0

const filtro = (filtragem, vetor) => {
  const vetor_filtrado = []
  for (let num of vetor){
    if (filtragem(num)) vetor_filtrado.push(num)
  }
  return vetor_filtrado
}

//console.log(filtro(par,[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//vetor = vetor.filter(x => x > 2)
vetor = vetor.filter( (_, index) => index % 2 === 0)

console.log(vetor)


