const alunoModel = require('../models/alunoModel'); //importando o model
class AlunoController {  //aqui fica os metodos das requisições
    buscar () {
        return alunoModel.listar();
    }
    criar(novoAluno) {
        return alunoModel.criar(novoAluno);
    }
    atualizar(alunoAtualizado, id) {
        return alunoModel.atualizar(alunoAtualizado, id);
    }
    deletar(id) {
        return alunoModel.deletar(id);
    }
}

module.exports = new AlunoController(); //exportar o controller