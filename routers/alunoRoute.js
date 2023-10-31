//chamando a funçao router do express
//const Router = require('express').router; //pode fazer assim
const { Router } = require('express'); //Outra forma de fazer. Mas primeiro faz o require e depois chama a funcao Router dentro dos {}. Essa estrura chama 'Object destructuring' do Javascript
const router = Router(); //atribuindo a funcao router do express á constante
const alunoController = require('../controllers/alunoController'); //importando o arq alunoController de controllers
const { error } = require('console');

//criando as rotas
router.get('/alunos', (req, res) => { 
    const listaAlunos = alunoController.buscar(); 
    listaAlunos
    .then((alunos) => res.status(200).json(alunos))
    .catch((error) => res.status(400).json(error.message));    
});

router.post('/alunos', (req, res) =>{
    const novoAluno = req.body;
    const aluno = alunoController.criar(novoAluno); 
    aluno
    .then(alunoCriado => res.status(201).json(alunoCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const alunoAtualizado = req.body;
    const aluno = alunoController.atualizar(alunoAtualizado, id); 
    aluno
    .then((resultAlunoAtualizado) => res.status(200).json(resultAlunoAtualizado))
    .catch((error) => res.status(400).json(error.message))
});


router.delete('/alunos/:id', (req, res) => {
    const {id} = req.params;
    const aluno = alunoController.deletar(id); 
    aluno
    .then((resultAlunoDeletado) => res.status(200).json(resultAlunoDeletado))
    .catch((error) => res.status(400).json(error.message))
});

module.exports = router; //exportando esse arq para ser importado em outros