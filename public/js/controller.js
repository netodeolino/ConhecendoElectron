var electron = require('electron')

function realizarLogin() {
	// body...
	var logintxt = document.getElementById('login').value;
	var senhatxt = document.getElementById('senha').value;
	alert(logintxt + ' ' + senhatxt);
}

function realizarCadastro() {
	// body...
	var testee1 = document.getElementById('InputLogin').value;
	var testee2 = document.getElementById('InputSenha').value;
	alert('Cadastro realizado com Sucesso!');
	location.href = "./../index.html";
}