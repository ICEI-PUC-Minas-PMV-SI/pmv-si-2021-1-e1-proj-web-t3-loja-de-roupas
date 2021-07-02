// VALIDAÇÃO DE NOME - FUNÇÃO QUE RESTRINGE O CAMPO NOME SOMENTE A DIGITAÇÃO DE LETRAS
function ApenasLetras(e, t) {

	try {
  	if (window.event) {
    	var charCode = window.event.keyCode;        
		}
		else if (e) {
      var charCode = e.which;
    }
		else {
      return true;
    }
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode > 191 && charCode <= 255) || (charCode == 32)) {
      return true;
    }
		else {
      return false;
    }
  }

	catch (err) {
    alert(err.Description);
  }
}

// VALIDAÇÃO DE EMAIL - FUNÇÃO QUE VERIFICA SE EMAIL É VÁLIDO
function validacaoEmail(field) {

	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

	if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
		document.getElementById("msgEmail").innerHTML = "<font color='green'>E-mail válido</font>";
	}
	else {
		document.getElementById("msgEmail").innerHTML = "<font color='red'>E-mail inválido </font>";
	}
}

// VALIDAÇÃO DE SENHA - DECALARAÇÃO DE VARIÁVEIS, MUDANÇA DO VALOR DO INPUT E FUNÇÃO
var senha = document.getElementById("inputSenha");
var confirmaSenha = document.getElementById("inputConfirmaSenha");

document.getElementById("inputSenha").addEventListener("change", validarSenha);
document.getElementById("inputConfirmaSenha").addEventListener("change", validarSenha);

function validarSenha() {

	if ((senha.value == "") || (confirmaSenha.value == "") || ((senha.value != "") != (confirmaSenha.value != ""))) {
  	alert("As senhas não conferem");
	}
  else if (senha.value === confirmaSenha.value) {
    alert("As senhas são iguais");
  }
	else {
		alert("As senhas não conferem");
	}
}

// VALIDAÇÃO DE CEP - FUNÇÃO QUE RESTRINGE O CAMPO CEP SOMENTE A DIGITAÇÃO DE NÚMEROS
function ApenasNumerosCEP(e, t) {
  try {
    if (window.event) {
      var charCode = window.event.keyCode;
    }
		else if (e) {
      var charCode = e.which;
    }
		else {
      return true;
    }
    if ((charCode > 47 && charCode < 58) || (charCode == 45)) {
      return true;
    }
		else {
      return false;
    }
  }
	
	catch (err) {
    alert(err.Description);
  }
}

/* DECLARAÇÃO DOS ELEMENTOS INPUT E TEXTOS DE ALERTA NO HTML */

const nome = document.querySelector("#inputNome");
const alertNome = document.querySelector("#alertNome").innerHTML;
const email = document.querySelector("#inputEmail");
const alertEmail = document.querySelector("#alertEmail").innerHTML;
const ddd = document.querySelector("#inputDDD");
const alertDDD = document.querySelector("#alertDDD").innerHTML;
const celular = document.querySelector("#inputCelular");
const alertCelular = document.querySelector("#alertCelular").innerHTML;
const cep = document.querySelector("#inputCEP");
const alertCEP = document.querySelector("#alertCEP").innerHTML;


/* FUNÇÃO QUE ALERTA O USUÁRIO CASO NÃO TENHA PREENCHIDO OS CAMPOS OBRIGATÓRIOS */
// CASO TENHA PREENCHIDO CORRETAMENTE O FORMULÁRIO, 
// OS DADOS SÃO SALVOS NO LOCAL STORAGE EM FORMATO JSON/ARRAY APÓS CLICAR NO BOTÃO ENVIAR

function alertForm() {

	if (nome.value == "") {
		alert(alertNome);
		nome.focus;
		return;
	}
	if (email.value == "") {
		alert(alertEmail);
		email.focus;
		return;
	}
	if (ddd.value == "") {
		alert(alertDDD);
		ddd.focus;
		return;
	}
	if (celular.value == "") {
		alert(alertCelular);
		celular.focus;
		return;
	}
	if (cep.value == "") {
		alert(alertCEP);
		cep.focus;
		return;
	}
	if ((senha.value == "") || (confirmaSenha.value == "") || ((senha.value != "") != (confirmaSenha.value != ""))) {
		alert("As senhas não conferem");
		return;
	}
}

/* FUNÇÃO PARA ENVIAR O FORMULÁRIO CASO ESTEJA TUDO OK */

function formularioOk() {
	alert("Cadastro concluído");
}

/*
let checkbox = document.getElementById("lembrar");
let botaoLogin = document.getElementById("btnLogin");

document.getElementById("btnLogin").addEventListener("click", lembrar);

function lembrar() {

if(checkbox.checked && botaoLogin.click()) {
    console.log("O cliente marcou o checkbox");
}
else {
    console.log("O cliente não marcou o checkbox");
}
}
*/