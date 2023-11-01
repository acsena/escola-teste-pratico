const mysql = require('mysql'); //chamando a dependencia do mysql

const conexao = mysql.createConnection({
    host: "mysql://root:4GFegdDAGhF36F-Gf23F5DFfedcHGGG-@monorail.proxy.rlwy.net:21438/railway",
    port: 3000,
    user: "root",
    password: '',
    database: 'alunos',
});

module.exports = conexao; //exportar a conexao com o banco