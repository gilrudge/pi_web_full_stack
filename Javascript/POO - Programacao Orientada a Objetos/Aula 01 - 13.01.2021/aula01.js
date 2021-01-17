class Quadrado {
  /*
  Atributos:
  + lado  
  */

  constructor (lado) {
    if (isNaN(lado)) throw 'lado deve ser numero'
    this.lado = lado;    
  }

  calcularArea(){
    const area = this.lado * this.lado;
    return area;

  }

  calcularPerim(){
    const perim = this.lado *4
    return perim
  }

}

const quadrado1 = new Quadrado(10);
const area = quadrado1.calcularArea();
const perim = quadrado1.calcularPerim();

console.log(quadrado1);
console.log(area);
console.log(perim);
