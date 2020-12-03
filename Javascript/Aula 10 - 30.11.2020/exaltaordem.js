// Exercicio 001 ----------------------------------------------------------------------------------------------------------

// Faça uma função para cada operação matemática básica (±*/). Em seguida faça uma função chamada calcular de alta-ordem que receba uma operação e dois números e invoque a operação usando os números como parâmetro.

// function soma(a,b){
//   return a + b
// }

// function subt(a,b){
//   return a - b
// }

// function mult (a,b){
//   return a * b
// }

// function div (a,b){
//   return a/b
// }

// function calcular(operacao, a, b){
//   return operacao(a,b)
// }

// console.log(calcular(soma,5,7))
// console.log(calcular(subt,5,3))
// console.log(calcular(mult,3,2))
// console.log(calcular(div,10,2))


// Exercicio 002 ----------------------------------------------------------------------------------------------------------



// Faça uma função chamada desconto, que receba um valor porcentual (por exemplo 10 representa 10%), em seguida ela deve retornar uma função que espera um valor, e retorna esse valor com desconto. Use a sintaxe de function e não arrow. Use sua função para criar duas funções especializadas para 10% e 15% de desconto.

//  function desconto(valor){
//    return function(preco){
//      return preco - (valor / 100 * preco)
//    }
//  }

//const desconto10 = desconto(10)
//const desconto15 = desconto(15)

//console.log(desconto10(100))
//console.log(desconto15(100))

// Exercicio 003 ----------------------------------------------------------------------------------------------------------


// Refaça o exercício acima usando arrow functions, lembre-se que o retorno é implícito nas arrows, isso gera um padrão muito interessante em funções que retornam funções (evite as chaves…).


// const calculo = (valor) => preco => preco - (valor/100*preco)

// const desconto10 = calculo(10)
// console.log(desconto10(100))

// const desconto15 = calculo(15)
// console.log(desconto15(100))

// Exercicio 004 ----------------------------------------------------------------------------------------------------------

// Crie uma função que recebe outra função, que chamaremos de função de transformação, e um array. Essa função deverá criar um novo array, cujos itens serão os valores do array original, transformados pela função de transformação.

// let vetor = [25, 23, 30, 40, 57, 60, 71, 89, 90, 10]


//  function transformacao(valor){
//    let vet1 = []
//    for (let i of vetor){
//      vet1.push(i*valor)
//      }
//      return vet1
//    }



//  function dobro (valor){
//    return valor * 2
//  }

//  function transformacao(funcao, vet){
//    let vet1 = []
//    for (let c of vet){
//      vet1.push(funcao(c))
//    }
//    return vet1
//    }     
   


//  console.log(transformacao(dobro,vetor))



//resoluçao lucas ex 004 ----------------------------------------------------------------------------------------------------

//  const dobro = x => 2*x
//  const cubo = x => x**3
//  console.log(dobro(5))
//  console.log(cubo(2))


//  const mapa = (funcao, vetor) => {
//    const vetor_transformado = []
//    for (let elemento of vetor){
//      vetor_transformado.push(funcao(elemento))
//    }
//    return vetor_transformado
//  }


//  const vetor = [9,3,5,1,4,9,3]
//  console.log(mapa(dobro,vetor))
//  console.log(mapa(cubo,vetor))



//Ex 005 -----------------------------------------------------------------------------------------------------------------------------------

// Crie uma função de alta-ordem que recebe outra função, que chamaremos de função de filtragem, e um array. Essa função deverá criar um novo array cujos itens serão apenas aqueles para os quais a função de filtragem retornar true, se ela retornar false não coloque o valor no array.

const filtro = (x) => x /*< 100*/
  
const vetor_filtrado = (funcao, vetor1) => {
  const new_vet = []
  for ( let elemento of vetor1){
    if (elemento > 100){
      new_vet.push(funcao(elemento))
    }
  }
  return new_vet
}


let vetor1 = [150, 50, 25, 200, 400, 10, 900, 99]
console.log(vetor_filtrado(filtro, vetor1))

