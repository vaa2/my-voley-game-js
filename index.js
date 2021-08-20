const Jogo = require('./jogo');
const Set = require('./set');


console.log('Iniciando');

var novoJogo = new Jogo('2021-08-13', '10:00', 'Rio Largo');
novoJogo.info();

var set01 = new Set();
var set02 = new Set();
var set03 = new Set();

set01.registrarPonto(new Ponto())