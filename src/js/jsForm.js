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

	var validFeedback = document.getElementById("validEmail").innerText;
	var invalidFeedback = document.getElementById("invalidEmail").innerText;
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
		document.getElementById("validEmail").innerText = "E-mail válido";
	}
	else {
		document.getElementById("invalidEmail").innerText = "E-mail inválido";
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

// VIACEP WEBSERVICE - FUNÇÃO QUE PROCURA O CEP VAI SERVIÇO WEB E ACUSA SE O CEP EXISTE OU NÃO

function limpa_formulario_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulario_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulario_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulario_cep();
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
	if ((senha.value == "") || (confirmaSenha.value == "") || (!((senha.value != "") != (confirmaSenha.value != "")))) {
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