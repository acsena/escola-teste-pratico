const { error } = require('console');
const conexao = require('../infraestrutura/conexao'); //importando a conexão com o banco

class AlunoModel {
    listar() {
        const sql = 'select * from aluno';
        return new Promise((resolve, reject) => {
                conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Erro ao listar alunos");
                    reject(error);
                }
                console.log('Deu certo o listar alunos');
                resolve(resposta)
            });
        });
    }

    

    criar(novoAluno) {
        const sql = 'insert into aluno set ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoAluno, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar aluno");
                    reject(error);
                }
                console.log('Criação de aluno feita');
                resolve(resposta)
            });
        });        
    }


    atualizar(alunoAtualizado, id) {
        const sql = 'update aluno set ? where id_aluno = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [alunoAtualizado, id], (error, resposta) => {
                if (error) {
                    console.log("Erro ao atualizar aluno");
                    reject(error);
                }
                console.log('Atualização de aluno feita');
                resolve(resposta)
            });
        });        
    }
    

    deletar(id) {
        const sql = 'delete from aluno where id_aluno = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if (error) {
                    console.log("Erro ao deletar aluno");
                    reject(error);
                }
                console.log('Aluno deletado');
                resolve(resposta)
            });
        });        
    }
}

module.exports = new AlunoModel(); //exportando a classe AlunoModel