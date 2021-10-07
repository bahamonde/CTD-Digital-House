/* 3-  Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).*/
let alunos = require("./aluno");
let lista = require("./lista");

console.log(lista)

let Curso = {
    nomeDoCurso: "CTD",
    notaDeAprovacao: 6,
    faltasMaximas: 10,
    listaDeEstudantes: lista,

     /* 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.*/
    alunoNovo: function (nome, qtdFaltas, notas) { curso.lista.push(new alunos.Aluno(nome, qtdFaltas, notas))},

    /* 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/
    
    foiAprovado:function (aluno) {
        let mediaAluno = aluno.calcularMedia();
        let notaParaAprovacao = curso.notaDeAprovacao;
        let FaltasAluno = aluno.qtdFaltas;
        let FaltasMaximasPermitidas = curso.faltasMaximas;
        if ((mediaAluno >= notaParaAprovacao) && ( FaltasAluno < FaltasMaximasPermitidas)) {
            return true;
        } else if ((FaltasAluno == FaltasMaximasPermitidas) && (mediaAluno > notaParaAprovacao)) {
            return true;
        } else {
            return false;
        }
    }
}

    
    /* 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.*/

  


module.exports = {
    Curso:Curso
}


