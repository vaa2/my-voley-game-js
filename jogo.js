module.exports = class Jogo{
    constructor(data, hora, local){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.sets = [];
    }

    info(){
        console.log('O jogo acontece em ' + this.data + ' as ' + this.hora + ' no local ' + this.local);
    }
}