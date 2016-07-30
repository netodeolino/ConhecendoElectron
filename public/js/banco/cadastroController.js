var uDAO = new UsuarioDAO();

function cadastroController() {
	// body...
	this.saveUsuario = function (nome, email, login, senha, callback) {
		// body...
		var usuario = new Usuario(nome, email, login, senha);
		return uDAO.save(usuario, callback);
	};
}