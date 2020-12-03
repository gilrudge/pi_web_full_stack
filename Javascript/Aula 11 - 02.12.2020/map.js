const vetor = ['10', '11', '23', '8']

function stringToInt(str){
  return parseInt(str)
}


const vetor2 = vetor.map(stringToInt)
//console.log(stringToInt('10'))
console.log(vetor2)


// map com 3 parametros obrigatoriamente indica o elemento, o indice do elemento e o vetor inteiro