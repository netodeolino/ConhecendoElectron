function UsuarioDAO(){

  var connection = new ConexaoBanco();

  this.save = function (user, callback){
    var c = connection.connected();
    c.query('INSERT INTO usuario SET ?', [user], function(err, result){// recebe o dado em json
      if (err){
        console.log("[ERROR] " + err.message);
        callback(false);
      }
      else
        callback(true);
      c.end();
    });
  }

  this.findByLogin = function(login, senha, callback){
    var c = connection.connected();
    c.query('SELECT * FROM usuario WHERE login = ? AND senha = ? ', [login, senha], function(err, row) {
      if (err){
        console.log("[ERROR] " + err.message);
        callback(null);
      }
      else
        callback(row);
      c.end();
    });
  };

}
