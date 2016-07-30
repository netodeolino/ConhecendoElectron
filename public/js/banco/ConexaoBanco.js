var mysql = require('mysql');

function ConexaoBanco(){

  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'YOUR_PASSWORD_MYSQL',
    database : 'conhecendoelectron'
  });

  this.connected = function(){
    this.connection.connect();
    return this.connection;
  };

}
