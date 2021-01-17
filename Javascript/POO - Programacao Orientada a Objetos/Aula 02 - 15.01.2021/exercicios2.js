// Questão 1 =======================================================================================================================

// Crie uma classe Cliente cujos atributos são nome, idade e e-mail. Construa um método que imprima as informações tal como abaixo:

// Nome: Fulano de Tal

// Idade: 40

// E-mail: fulano@mail.com


// class Cliente {

//   constructor(nome, idade, email){
//     this.nome = nome
//     this.idade = idade
//     this.email = email
//   }
// }


// const info = new Cliente('Gil', 34, 'gilblas07@hotmail.com')

// console.log(info)



// Questão 2 =======================================================================================================================

// Crie uma classe Bola cujos atributos são cor e raio. Crie um método que imprime a cor da bola. Crie um método para calcular a área dessa bola. Crie um método para calcular o volume da bola. Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

// Obs.:

// Área da esfera = 4*3.14*r*r;

// Volume da esfera = 4*3.14*r*r*r/3


// class Bola {

//   constructor(raio, cor){    
//     this.raio = raio
//     this.cor = cor
//   }

//   imprimiCor(){
//     console.log(this.cor)
//   }
  
//   areaBola(){
//     const area = Math.floor(4 * 3.14 * this.raio * this.raio);
//     return area
//   }

//   volumeBola(){
//     const volume = Math.floor(4 * 3.14 * this.raio * this.raio * this.raio / 3);
//     return volume
//   }
// }

// const raio = new Bola(10,'Azul')


// const area = raio.areaBola()
// const volume = raio.volumeBola()

// console.log(raio)
// console.log(area)
// console.log(volume)

// Questão 3 =======================================================================================================================

// Crie uma classe Retângulo cujos atributos são lado_a e lado_b. Crie um método para calcular a área desse retângulo. Crie um objeto dessa classe e calcule a área e a imprima em seguida.


class Retangulo {

  constructor(lado_a, lado_b){

    this.lado_a = lado_a
    this.lado_b = lado_b
  }

  areaRet(){
    const area = this.lado_a * this.lado_b
    return area
  }
}

const ret = new Retangulo(10,5)
const area = ret.areaRet()

console.log(ret)
console.log(area)



// Questão 4 =======================================================================================================================

// Crie uma classe Funcionario cujos atributos são nome e e-mail, horas trabalhadas e salário. Guarde as horas trabalhadas como um objeto (sem necessariamente utilizar classes) cujas chaves são o mês em questão e, como outro objeto, guarde o salário por hora relativo ao mês em questão. Crie um método que retorna o salário mensal do funcionário.




// dois objetos:
//horas trabalhadas = jan:100 horas
//salario = jan: R$400