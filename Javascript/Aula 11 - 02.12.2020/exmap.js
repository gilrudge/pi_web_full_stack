// Exercicio 001 -----------------------------------------------------------------------------------------------------------------------------

// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

//     5% para produtos abaixo de R$ 200,00

//     10% para produtos abaixo de R$ 400,00

//     15% para produtos abaixo de R$ 2000,00

//     20% para produtos acima de R$ 2000,00

//     Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

//     Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

const input = require('readline-sync')

let preco = []

for (let c = 0; c < 10; c++){
  let valor = parseInt(input.question('Digite um preco de produto: '))
  preco.push(valor)
}

console.log(preco)

const desc = preco.map(desconto => {
  if (desconto < 200 ) desconto = desconto * 0.95
  else if (desconto < 400) desconto = desconto * 0.9
  else if (desconto < 2000) desconto = desconto * 0.85
  else desconto = desconto - 0.8
  return desconto
}

  )

console.log(desc)

// Exercicio 002 -----------------------------------------------------------------------------------------------------------------------------

