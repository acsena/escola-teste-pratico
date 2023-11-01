const routerAlunos = require('./alunoRoute'); //importando o arq alunoRoute
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json')

module.exports = (app, express) => {  //para usar as rotas do alunoRoute. 
    app.use(express.json()); //os app.use em que seguir a ordem abaixo ou vai dar erro pela ordem de criação 
    app.use(express.urlencoded( { extended: true }));
    app.use(routerAlunos); //esse por ultimo pois é a permissao para usar a rota, tudo ja tem que estar criado
   app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

