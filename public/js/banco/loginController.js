function verificarLogin(login, senha, callback)
{
  var dao = new UsuarioDAO();
  dao.findByLogin(login, senha, function(result){
      var user = result;
      console.log(result);
      if(user)
      {
        let loggedUser = user;
        callback(user);
      }
      else
        callback(false);
  });
}
