window.setTimeout(function() {
	$('#btnNavMark').click(function() {
    $('#navbarNavAltMarkup').toggle('2000');
    $('#categorias').hide('fast');
  });
})

window.setTimeout(function() {
	$('#btncat').click(function() {
    $('#categorias').toggle('2000');
		$('#navbarNavAltMarkup').hide('fast');
  });
})

window.setTimeout(function() {
  $("#inputfrete").click(function() {
    alert("frete");
  }); 
  $("#inputpagamento").click(function() {
    alert("pagamento");
  });
  $("#inputparcelamento").click(function() {
    alert("parcelamento");
  });
  $("#inputtroca").click(function() {
    alert("troca");
  });
	$("#inputcontato").click(function() {
    alert("contato");
  });
  $("#inputsobre").click(function() {
    alert("informacoes");
  });
})
/*

let form = document.getElementById("cadastro");

form.addEventListener("submit", (event) => {
   event.preventDefault();


});
*/

var regex = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
var celular = document.getElementById("inputCelular");
regex = celular;
var telefone = '(31)93233-4343';

var alertacelular = document.getElementById("alertacel").innerText;


function validPhone(celular) {
    var regex = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(celular);
}

function alertform() {

		if (celular != validPhone(celular)) {
			alert(alertacelular);
		}
		/*
 		else {
			
 			alert("Cadastro concluído");

		}*/
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