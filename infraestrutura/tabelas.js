class Tabelas {  //iniciando a classe
    init(conexao) { 
        this.conexao = conexao;  //iniciando a conexao com o banco
        this.createtableAlunos(); //iniciando a criação da tabela
    }

    createtableAlunos() { //funcao para o sql criar a tabela aluno e retornar erro se tiver
        const sql = ` 
            create table if not exists aluno(
            id_aluno int(4) auto_increment primary key,
            nome_aluno varchar(50),
            idade_aluno int(3),
            nota_pri_semestre int(3),
            nota_seg_semestre int(3),
            nome_prof varchar (50),
            num_sala int(9)
        );
             `; //os registros DEVEM estar dentro desse acento PARA A ESQUERDA `` chama template string
        this.conexao.query(sql, (error) => { 
            if (error) {
                console.log('Erro ao criar a tabela aluno');
                console.log(error.message);
                return;
            }
            console.log('Criou a tabela alunos com sucesso');
        });
    }
}

module.exports = new Tabelas(); //exportando essa classe para importar no index global