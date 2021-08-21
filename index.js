const Jogo = require('./jogo');
const Set = require('./set');
const Ponto = require('./ponto');


console.log('Iniciando');

var novoJogo = new Jogo('2021-08-13', '10:00', 'Rio Largo');
novoJogo.info();

var set01 = new Set();
var set02 = new Set();
var set03 = new Set();

set01.registrarPonto(new Ponto())
set02.registrarPonto(new Ponto())
set03.registrarPonto(new Ponto())