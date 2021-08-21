module.exports = class Jogo{
    constructor(data, hora, local){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.adversario = adversario;
        this.juiz = juiz;
        this.sets = [];
    }

    info(){
        console.log('O jogo acontece em ' + this.data + ' as ' + this.hora + ' no local ' + this.local);
    }

    getData(){
        return this.data;
    }

    setData(data){
        this.data = data;
    }

    getHora(){
        return this.hora;
    }

    setHora(hora){
        this.hora = hora;
    }

    getLocal(){
        return this.local;
    }

    setLocal(local){
        this.local = local;
    }

    getAdversario(){
        return this.adversario;
    }

    setAdversario(adversario){
        this.adversario = adversario;
    }

    getJuiz(){
        return this.juiz;
    }

    setJuiz(juiz){
        this.juiz = juiz;
    }
}