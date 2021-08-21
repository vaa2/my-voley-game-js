module.exports = class TipoPonto{
    constructor(saque, contraSaque, ataque, bloqueio, erroAdversario){
        this.saque = saque;
        this.contraSaque = contraSaque;
        this.ataque = ataque;
        this.bloqueio = bloqueio;
        this.erroAdversario = erroAdversario;
    }

    getSaque(){
        return this.saque;
    }

    setSaque(saque){
        this.saque = saque;
    }

    getContraSaque(){
        return this.contraSaque;
    }

    setContraSaque(contraSaque){
        this.contraSaque = contraSaque;
    }

    getAtaque(){
        return this.ataque;
    }

    setAtaque(ataque){
        this.ataque = ataque;
    }

    getBloqueio(){
        return this.bloqueio;
    }

    setBloqueio(bloqueio){
        this.bloqueio = bloqueio;
    }

    getErroAdversario(){
        return this.erroAdversario;
    }

    setErroAdversario(erroAdversario){
        this.erroAdversario = erroAdversario;
    }
}