const { error } = require('console');
const conexao = require('../infraestrutura/conexao'); //importando a conexão com o banco

class AlunoModel {

    executaQuery(sql, parametros = '') {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
                if(error) {
                    return reject(error)
                }
                return resolve(resposta)
            });
        });
    }

    listar() {
        const sql = 'select * from aluno';
        return this.executaQuery(sql)
    }

    buscarPeloId(alunoBuscado, id) {
        const sql = 'select * from aluno where id_aluno = ?';
        return this.executaQuery(sql, [alunoBuscado, id]);
    }

    criar(novoAluno) {
        const sql = 'insert into aluno set ?';
        return this.executaQuery(sql, novoAluno);
    }


    atualizar(alunoAtualizado, id) {
        const sql = 'update aluno set ? where id_aluno = ?';
        return this.executaQuery(sql, [alunoAtualizado, id]);
    }


    deletar(id) {
        const sql = 'delete from aluno where id_aluno = ?';
        return this.executaQuery(sql, id);
    }
}

module.exports = new AlunoModel(); //exportando a classe AlunoModel