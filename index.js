const mysql = require('mysql')
var fs = require('fs');


//modificar a conexão
const connection = mysql.createConnection({
    host: '46.101.129.171',
    user: 'crowdsourcing',
    password: 'Qwer1@#$',
	database: 'crowdsub'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn")
    } else {
        console.log("Error connecting database ... nn")
    }
});


connection.query('select resultado.id, task1.start_legend, task1.end_legend, task2.legenda from resultado, task2, task1 where resultado.id_legenda = task2.id and task1.id = task2.id_video', async function(err, rows, fields) {
    if(err) console.log(err);

    rows.forEach(function(result){
    		var line = ""
    		line += result.id;
	    	line += "\n";
	    	line += result.start_legend;
	    	line += " --> "
	    	line += result.end_legend + "\n";
	    	line += result.legenda;
	    	line += "\n\n"
	    	fs.appendFile('result.srt', line, function (err) {
			  if (err) throw err;
			});
    });

    
    connection.end();
});

