const mysql = require('mysql')

//modificar a conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'crowdsub'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

//1) pegar todos os resultados da agregação do banco de dados

//2) gerar um srt com os resultados

//3) resolver commits bugados

