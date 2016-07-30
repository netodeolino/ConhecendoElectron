var electron = require('electron')

function realizarLogin() {
	// body...
	var logintxt = document.getElementById('login').value;
	var senhatxt = document.getElementById('senha').value;
	verificarLogin(logintxt, senhatxt, function (result) {
		// body...
		var usuario = result[0];
		if(usuario){
			location.href = "./views/inicio.html";
			console.log(usuario);
		}else{
			alert("Login ou Senha Inválido!");
		}
	});
}

function realizarCadastro() {
	// body...
	var nometxt = document.getElementById('InputName').value;
	var emailtxt = document.getElementById('InputEmail').value; 
	var logintxt = document.getElementById('InputLogin').value;
	var senhatxt = document.getElementById('InputSenha').value;

	var cadCon = new cadastroController();

	cadCon.saveUsuario(
		nometxt,
		emailtxt,
		logintxt,
		senhatxt,
		function (result){
			if(result === true){
				alert('Cadastro realizado com Sucesso!');
				location.href = "./../index.html";
			}else{
				alert('Erro no Cadastro!');
			}
		});
}