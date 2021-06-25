// DECLARAÇÃO DOS ELEMENTOS INPUT E TEXTOS DE ALERTA NO HTML

const nome = document.querySelector("#inputNome");
const alertNome = document.querySelector("#alertNome").innerHTML;
const email = document.querySelector("#inputEmail");
const alertEmail = document.querySelector("#alertEmail").innerHTML;
const ddd = document.querySelector("#inputDDD");
const alertDDD = document.querySelector("#alertDDD").innerHTML;
const celular = document.querySelector("#inputCelular");
const alertCelular = document.querySelector("#alertCelular").innerHTML;

// FUNÇÃO QUE ALERTA O USUÁRIO CASO NÃO TENHA PREENCHIDO OS CAMPOS OBRIGATÓRIOS
// CASO TENHA PREENCHIDO CORRETAMENTE O FORMULÁRIO, OS DADOS SÃO SALVOS NO LOCAL STORAGE EM FORMATO JSON/JS

function alertform() {
		
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