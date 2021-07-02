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
    alert("O frete para as capitais e regiões metropolitanas será de R$ 3,99 e para outras regiões será de R$ 6,99.");
  });
  $("#inputpagamento").click(function() {
    alert("O pagamento pode ser realizado de duas formas:\n\n1- Cartão de crédito\n2- Boleto bancário");
  });
  $("#inputparcelamento").click(function() {
    alert("Nas compras parceladas são aceitos os cartões de crédito das bandeiras Mastercard, Visa, American Express, Hipercard e Elo. O pagamento pode ser feito em até 12 parcelas sem juros.");
  });
  $("#inputtroca").click(function() {
    alert("Caso queira efetuar a troca de algum produto, o prazo é de até 120 dias após o recebimento. Para realizar o pedido de troca entre em contato com o suporte da loja.");
  });
	$("#inputcontato").click(function() {
    alert("Se estiver com dúvidas, nos envie um e-mail ou nos ligue:\n\nemail@lojabruthelu.com.br\n\n(00) 91234-5678");
  });
  $("#inputsobre").click(function() {
    alert("A Loja Bruthelu´s Moda Feminina é uma loja de roupas femininas fictícia.");
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