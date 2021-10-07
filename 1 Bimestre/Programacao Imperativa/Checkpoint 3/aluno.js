/*1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno. */

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    /* 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */
    this.calcularMedia = function Media() {
        let soma = 0;
        for (var x=0; x < this.notas.length; x++) {
            soma += parseInt(this.notas[x]);}
        let media = soma / this.notas.length;
        return media;
       
    };
    this.calcularFaltas = function Faltas() {
        let faltas = this.qtdFaltas + 1;
        return faltas; 
    }

}

   
module.exports = {
    Aluno:Aluno
}


