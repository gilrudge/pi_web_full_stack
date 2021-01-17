class Restaurante {

  /* Atributos
    capacidade
    categoria
    nome
    endereco
    horario de funcionamento
    menu
  */
  menu = [];

  constructor (
    
    nome,
    capacidade,
    categoria,
    horario_funcionamento,
    

    ) {

      this.nome = nome
      this.categoria = categoria
      this.capacidade = capacidade      
      this.horario_funcionamento = horario_funcionamento
      this.menu = []

  }

  addToMenu(...ItemCardapio){
    this.menu.push(...ItemCardapio)
  }


  introductionText(){
    return `====================================================
    Olá, bem vindo ao restaurante ${this.nome},
    somos uma ${this.categoria} com capacidade para ${this.capacidade}
    pessoas e iniciamos nossas atividades às ${this.horario_funcionamento} horas
    ====================================================`
  }

  getFormattedMenu(){
    const formattedMenu = this.menu.reduce((currentText, currentItem, currentIdx) => {
      return currentText + `${currentIdx + 1} - ${currentItem.toString()}\n`
    },'');
    return formattedMenu
  }

  run(){
    
    
    console.log(this.introductionText());
    console.log(this.getFormattedMenu());
    
  }

}


class ItemCardapio {

  constructor (nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  toString(){
    return `${this.nome} ------------- ${this.preco}
${this.categoria}`
  }
}

const restaurante = new Restaurante('Pietro\'s Cafe', 50, 'Cafeteria', '14:00');

const item1 = new ItemCardapio('Cafe Expresso', 5.00, 'Café')
const item2 = new ItemCardapio('Cappuccino', 7.00, 'Café')
const item3 = new ItemCardapio('Suco natural', 9.00, 'Suco')
const item4 = new ItemCardapio('Coca-cola', 6.00, 'Refrigerante')
const item5 = new ItemCardapio('Empada', 6.00, 'Salgado')
const item6 = new ItemCardapio('Petit Gateau', 12.00, 'Sobremesa')




restaurante.addToMenu(item1,item2,item3,item4,item5,item6)
restaurante.run()
// restaurante.addToMenu(item2)
// restaurante.addToMenu(item3)
// restaurante.addToMenu(item4)
// restaurante.addToMenu(item5)
// restaurante.addToMenu(item6)

//console.log(restaurante)

//console.log(message)