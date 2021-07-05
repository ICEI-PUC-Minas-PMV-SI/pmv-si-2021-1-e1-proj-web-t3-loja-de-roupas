var produtos = {
	"categorias": [
    {
			"vestuarios": [
				"blusas",
				"vestidos",
        "camisetas e tops",
        "saias e shorts",
        "pijamas e casuais"
			],
			"marcas": [
       "hering",
       "malwee",
       "doce trama"
      ],
      "cor": [
        "branco",
        "preto",
        "vermelho",
        "verde"
      ],
      "tamanho": [
        "xp",
        "pp",
        "m",
        "g",
        "gg",
        "xg"
      ]
		}
  ]
}

const inputPesquisa = document.querySelector("#inputPesquisa");
const inputSubmit = document.querySelector("#btnPesquisa");

let produtosloja = new Array()
let produtosvestuarios = new Array()
let produtosmarcas = new Array()
let produtoscor = new Array()
let produtostamanho = new Array()

produtosloja = produtos
produtosvestuarios = produtos.categorias[0].vestuarios
produtosmarcas = produtos.categorias[0].marcas
produtoscor = produtos.categorias[0].cor
produtostamanho = produtos.categorias[0].tamanho

inputSubmit.addEventListener("click", _ => {

	

	if (localStorage.hasOwnProperty("produtosloja")) {
    	produtosloja = JSON.parse(localStorage.getItem("produtosloja"))
  	}

	if (localStorage.hasOwnProperty("produtosvestuarios")) {
    	produtosvestuarios = JSON.parse(localStorage.getItem("produtosvestuarios"))
  	}

	if (localStorage.hasOwnProperty("produtosmarcas")) {
    	produtosmarcas = JSON.parse(localStorage.getItem("produtosmarcas"))
  	}

	if (localStorage.hasOwnProperty("produtoscor")) {
    	produtoscor = JSON.parse(localStorage.getItem("produtoscor"))
  	}

	if (localStorage.hasOwnProperty("produtostamanho")) {
    	produtostamanho = JSON.parse(localStorage.getItem("produtostamanho"))
  	}

  	/* Adiciona um novo valor nos arrays criados */

		//produtos.push({cep: inputCEP.value, endereco: inputEndereco.value, bairro: inputBairro.value, cidade: inputCidade.value, estado: inputEstado.value})
    localStorage.setItem("produtosloja", JSON.stringify(produtosloja))
		localStorage.setItem("produtosvestuarios", JSON.stringify(produtosvestuarios))
		localStorage.setItem("produtosmarcas", JSON.stringify(produtosmarcas))
		localStorage.setItem("produtoscor", JSON.stringify(produtoscor))
		localStorage.setItem("produtostamanho", JSON.stringify(produtostamanho))
})


/* PRIMEIRA PARTE

function adicionaItem(e) {

  document.querySelector("#inputPesquisa").innerHTML = pesquisa_select;
  var pesquisa_select = produtosvestuarios || produtosmarcas || produtoscor || produtostamanho;
	
	 //document.querySelector("#inputPesquisa");

  let num_produtos = pesquisa_select;
  var j_index = -1;

   // INDEX DO PRODUTO DENTRO DO JSON ARRAY
  for(var x = 0; x < num_produtos; x++) {
  	if(produtos.categorias[0].vestuarios[x].valueOf || produtos.categorias[0].marcas[x].valueOf || produtos.categorias[0].cor[x].valueOf || produtos.categorias[0].tamanho[x].valueOf == e) {
         j_index = x;
    }
	}

	if(j_index != -1) {
  
      // PASSA POR TODAS AS CIDADES DO ESTADO SELECIONADO,
			// CRIA UM ELEMENTO OPTION E ADICIONA UM VALUE A TODAS ELAS

    produtos.categorias[0].vestuarios[j_index].valueOf(function(vestuarios) {

			if (localStorage.hasOwnProperty("produtosvestuarios")) {
    			vestuarios = JSON.parse(localStorage.getItem("produtosvestuarios"));
					e = vestuarios;
  		}
   	})
  }

	window.setTimeout(function() {

					

					document.getElementById("btnPesquisa").addEventListener("click", adicionaItem);

					$("#listaprodutos").on("click", "li", function(event) {

						var listaprodutos = $("#listaprodutos");
						var itemlista = $(".itemlista");

        		var index = listaprodutos.index(itemlista);
        		var nth = "#listaprodutos li:nth-child("+(index+1).toString()+")";

						var vestuarios = produtosvestuarios;

						for(var x = 0; x < vestuarios; x++) {
							let listaprodutos = produtos.categorias[0].vestuarios[x].valueOf();
						}

						if (localStorage.hasOwnProperty("produtosvestuarios")) {
    					vestuarios = JSON.parse(localStorage.getItem("produtosvestuarios"));
							e = vestuarios;
  					}



    				var elem = $(this);
						event.preventDefault();
    				console.log( elem.text() );
					});
	});
}


				/*
    		$("#btnPesquisa").click(function() {

					var listaprodutos = $("#listaprodutos");
					var itemlista = $(".itemlista");

        	var index = listaprodutos.index(itemlista);
        	var nth = "#listaprodutos li:nth-child("+(index+1).toString()+")";
        	//var valor = $(this).val().toUpperCase();

				​​​​​​​​​​​​​​​​​​​​​*/
					/*
        	$("#listaprodutos li").show();
        	$(nth).each(function() {
            if($(this).text().toUpperCase().indexOf(valor) < 0) {
                $(this).parent().hide();
            }
        	});
					*/
    		
 
    	//	$("#btnPesquisa").blur(function(){
       // 	$(this).val("");
    	//	});
			//})
			
	


/*
window.setTimeout(function() {

    		$("#btnPesquisa").click(function() {

        	var index = $(this).parent().index();
        	var nth = "#tabela td:nth-child("+(index+1).toString()+")";
        	var valor = $(this).val().toUpperCase();
        	$("#tabela tbody tr").show();
        	$(nth).each(function() {
            if($(this).text().toUpperCase().indexOf(valor) < 0) {
                $(this).parent().hide();
            }
        	});
    		});
 
    		$("#btnPesquisa").blur(function(){
        	$(this).val("");
    		});
			})


	*/		
	/*
	 $(function(){
    $("#btnPesquisa").keyup(function(){        
        var index = $(this).parent().index();
        var nth = "#tabela td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("#tabela tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor) < 0){
                $(this).parent().hide();
            }
        });
    });
 
    $("#btnPesquisa").blur(function(){
        $(this).val("");
    }); 
		*/

/*
         var cid_opts = document.createElement('option');
         cid_opts.setAttribute('value',cidade)
         cid_opts.innerHTML = cidade;
         cidade_select.appendChild(cid_opts);
      	});

				




*/


/* SEGUNDA PARTE

    function AdicionaItem() {
            
						

            // Obtem os dados informados pelo usuário nos filtros
            //let fc = document.getElementById('filtro_cidade').value;
            //let fcg = document.getElementById('filtro_categoria').value;

						let pesquisa = document.getElementById("inputPesquisa").value;

            // limpa a lista de contatos apresentados
            //$("#table-contatos").empty();

            // Popula a tabela com os registros do banco de dados
            //for (let index = 0; index < db.data.length; index++) {
                //const contato = db.data[index];

						for (let index = 0; index < produtosvestuarios.length; index++) {
                const vestuarios = produtosvestuarios[index];

								

                // Verifica se os dados do contato batem com os filtros
                if ((vestuarios.blusas == pesquisa) || (vestuarios.vestidos == pesquisa))   {
                    
                    // Inclui o contato na tabela    
                    $("#listaprodutos").append(`<li class="itemlista">${vestuarios.blusas}</li>
                                                    <li>${vestuarios.vestidos}</li>`);
                }

/*
								if (((contato.cidade == fc) || (fc == '')) &&
                   ((contato.categoria == fcg) || (fcg == '')))   {
                    
                    // Inclui o contato na tabela    
                    $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                                    <td>${contato.nome}</td>
                                                    <td>${contato.telefone}</td>
                                                    <td>${contato.email}</td>
                                                    <td>${contato.cidade}</td>
                                                    <td>${contato.categoria}</td>
                                                    <td>${contato.website}</td>
                                                </tr>`);
                }


            }

        }

				*/