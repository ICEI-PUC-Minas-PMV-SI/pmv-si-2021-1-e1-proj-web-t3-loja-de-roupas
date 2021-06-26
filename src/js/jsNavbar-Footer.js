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

* PRECISA DOS PRODUTOS EM UM JSON PARA ISSO FUNCIONAR 

const pesquisa = document.querySelector("#pesquisa");



function adicionaitem() {
																														//(NAO DESSA FORMA EXATAMENTE)
	if (pesquisa.value == "") {
		alert("por favor preencha o campo pesquisa");
		pesquisa.focus;
		return;
	}
}

*/