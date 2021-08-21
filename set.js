const Ponto = require('./ponto');

module.exports = class Set{
    constructor(){
        this.pontosCasa = 0;
        this.pontosAdversario = 0;
        this.pontos = [];
    }

    getMaiorPontuador(){
        var maiorJogador = null;
        this.pontos.forEach(
            (ponto) => {
                if(maiorJogador == null || (ponto.getJogador().getTotalPontosJogador() > maiorJogador.getTotalPontosJogador())){
                    maiorJogador = ponto.getJogador();
                }
            }
        );

        return maiorJogador;
    }

    getListaPontosPorTipo(){
        var listaPOntosPorTipo = null;
    }

    registrarPonto(ponto){
        var registrarPonto = 0;
    }
}