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