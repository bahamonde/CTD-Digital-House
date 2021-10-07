let alunos = require("./aluno");
let curso = require("./curso")

let aluno1 = new alunos.Aluno("Aline", 20, [5, 5, 5]);
let aluno2 = new alunos.Aluno("Anderson", 2, [8, 6 , 9]);

console.log(aluno1.calcularMedia());
console.log(aluno1.calcularFaltas());
console.log(aluno1.qtdFaltas);

console.log(aluno3.alunoNovo('Ana', 2, [8, 9, 8]));

let lista = [aluno1, aluno2];

module.exports = lista;