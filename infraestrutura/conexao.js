const mysql = require('mysql'); //chamando a dependencia do mysql

const conexao = mysql.createConnection({
    host: "viaduct.proxy.rlwy.net",
    port: 16812,
    user: "root",
    password: '-3BCcCe6bhHcDF-3FGB25Ada6ed5BbD4',
    database: 'railway',
});

module.exports = conexao; //exportar a conexao com o banco