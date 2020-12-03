const input = require('readline-sync')



let cat = 0
let peca = 0
let valor = 0
let lista = []

let itens = {
  motor: [{peca: 'pistao', valor: 50}],
  suspencao: [{peca: 'amortecedor', valor: 20}],
  cambio:[{peca: 'embreagem', valor: 30}],
  seguranca:[{peca: 'pastilhas', valor: 10}],
  funilaria:[{peca: 'parachoque', valor: 15}],  
}

peca = input.question('Digite nome da peca: ')
valor = parseInt(input.question('Digite o valor da peca: '))
lista = {peca, valor}
itens.funilaria.push(lista)

console.log(itens)



