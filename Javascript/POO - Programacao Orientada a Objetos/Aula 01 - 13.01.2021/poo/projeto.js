class Restaurante {

    /* Atributos 
    capacidade
    categoria
    nome
    endereço
    horario de funcionamento
    menu
    */

    constructor (
        nome, 
        categoria, 
        capacidade, 
        horario_funcionamento
    ) {
        this.nome = nome;
        this.categoria = categoria;
        this.capacidade = capacidade;
        this.horario_funcionamento = horario_funcionamento;
    }

    addToMenu(itemCardapio) {
        
    }

    run () {
        console.log(`Bem-vindo ao ${this.nome}!!
A ${this.categoria} mais amada!
A lotação máxima do nosso estabelecimento é de ${this.capacidade} pessoas. Mas devido à pandemia, estamos operando em 50% da capacidade: ${Math.floor(this.capacidade / 2)} pessoas.
Estaremos abertos a partir das ${this.horario_funcionamento} para atendê-lo.`);
    }
}

class ItemCardapio {

    constructor (nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    toString () {
        return `${this.nome} ------------ ${this.preco}
${this.categoria}`;
    }
}

const restaurante = new Restaurante('Pietro\'s Cafe', 'Cafeteria', 50, '14:00');
restaurante.run();