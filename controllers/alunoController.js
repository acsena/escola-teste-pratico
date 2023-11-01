const alunoModel = require('../models/alunoModel'); //importando o model
class AlunoController {  //aqui fica os metodos das requisições
    buscar (req, res) {
        const listaAlunos = alunoModel.listar(); 
        return listaAlunos
            .then((alunos) => res.status(200).json(alunos))
            .catch((error) => res.status(400).json(error.message));  
    }
    buscarPeloId (req, res) {
        const {id} = req.params;
        const aluno = alunoModel.buscarPeloId(id); 
        return aluno
        .then((resultAlunoBuscado) => res.status(200).json(resultAlunoBuscado))
        .catch((error) => res.status(400).json(error.message))
    }
    criar(req, res) {
        const novoAluno = req.body;
        const aluno = alunoModel.criar(novoAluno); 
        return aluno
        .then(alunoCriado => res.status(201).json(alunoCriado))
        .catch(error => res.status(400).json(error.message));
    }
    atualizar(req, res) {
        const { id } = req.params;
        const alunoAtualizado = req.body;
        const aluno = alunoModel.atualizar(alunoAtualizado, id); 
        return aluno
        .then((resultAlunoAtualizado) => res.status(200).json(resultAlunoAtualizado))
        .catch((error) => res.status(400).json(error.message))
    }
    deletar(req,res) {
        const {id} = req.params;
        const aluno = alunoModel.deletar(id); 
        return aluno
        .then((resultAlunoDeletado) => res.status(200).json(resultAlunoDeletado))
        .catch((error) => res.status(400).json(error.message))
    }
}

module.exports = new AlunoController(); //exportar o controller