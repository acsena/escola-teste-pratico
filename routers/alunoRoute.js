//chamando a funçao router do express
//const Router = require('express').router; //pode fazer assim
const { Router } = require('express'); //Outra forma de fazer. Mas primeiro faz o require e depois chama a funcao Router dentro dos {}. Essa estrura chama 'Object destructuring' do Javascript
const router = Router(); //atribuindo a funcao router do express á constante
const alunoController = require('../controllers/alunoController'); //importando o arq alunoController de controllers
const { error } = require('console');

//criando as rotas
router.get('/alunos', alunoController.buscar);

router.get('/alunos/:id', alunoController.buscarPeloId);

router.post('/alunos', alunoController.criar);

router.put('/alunos/:id', alunoController.atualizar);


router.delete('/alunos/:id', alunoController.deletar);

module.exports = router; //exportando esse arq para ser importado em outros