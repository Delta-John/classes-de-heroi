class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
         this.idade = idade;
        this.tipo = tipo;
    }

    escolherAtaque(ataqueEscolhido) {
        console.log(`O ${this.tipo} escolheu o ataque: ${ataqueEscolhido}`);
    }

    atacar() {
        let ataque = '';

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const classe = document.getElementById('classe').value;

    const heroi = new Heroi(nome, idade, classe);
    heroi.atacar();
}