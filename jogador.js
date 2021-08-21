module.exports = class Jogador{
    constructor(nome, camisa){
        this.nome = nome;
        this.camisa = camisa;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getTotalPontosJogador(){
        var totalPontosJogador = 0;
    }
}