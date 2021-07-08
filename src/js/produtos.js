// ARRAY JSON PRODUTOS
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

// DECLARACAO DO ARRAY JSON CRIADO EM PARTES E ARMAZENAMENTO DELE NO LOCALSTORAGE
let inputSubmit = document.querySelector("#btnPesquisa");
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

    localStorage.setItem("produtosloja", JSON.stringify(produtosloja))
		localStorage.setItem("produtosvestuarios", JSON.stringify(produtosvestuarios))
		localStorage.setItem("produtosmarcas", JSON.stringify(produtosmarcas))
		localStorage.setItem("produtoscor", JSON.stringify(produtoscor))
		localStorage.setItem("produtostamanho", JSON.stringify(produtostamanho))
})

/* -- */

// DECLARACAO DO INPUT E BOTAO DE PESQUISA
var pesquisa = document.getElementById("inputPesquisa");
var botaoPesquisa = document.getElementById("btnPesquisa");

// DECLARACAO DOS CARDS DE CADA PRODUTO
var primeiraCol = document.getElementById("primeiraCol");
var segundaCol = document.getElementById("segundaCol");
var terceiraCol = document.getElementById("terceiraCol");
var quartaCol = document.getElementById("quartaCol");
var quintaCol = document.getElementById("quintaCol");
var sextaCol = document.getElementById("sextaCol");
var setimaCol = document.getElementById("setimaCol");
var oitavaCol = document.getElementById("oitavaCol");
var semEstoque = document.getElementById("semEstoque");

// FUNCAO QUE ALTERA O PRODUTO QUE APARECE NA VITRINE DE ACORDO COM O PRODUTO PESQUISADO
document.getElementById("inputPesquisa").addEventListener("change", pesquisaProduto);

	function pesquisaProduto() {

		if ((pesquisa.value == "vestidos") || (pesquisa.value == "vestido")) {

			document.getElementById("btnPesquisa").addEventListener("click", pesquisaProdutoBotao);

			function pesquisaProdutoBotao() {
				event.preventDefault()
				primeiraCol.classList.replace("displayn", "displayb");
				segundaCol.classList.replace("displayn", "displayb");
				terceiraCol.classList.replace("displayn", "displayb");
				quartaCol.classList.replace("displayn", "displayb");
				quintaCol.classList.replace("displayb", "displayn");
				sextaCol.classList.replace("displayb", "displayn");
				setimaCol.classList.replace("displayb", "displayn");
				oitavaCol.classList.replace("displayn", "displayb");
				semEstoque.classList.replace("displayb", "displayn");
			};
		}

		if ((pesquisa.value == "saia") || (pesquisa.value == "saias")) {

			document.getElementById("btnPesquisa").addEventListener("click", pesquisaProdutoBotao);

			function pesquisaProdutoBotao() {
				event.preventDefault()
				primeiraCol.classList.replace("displayb", "displayn");
				segundaCol.classList.replace("displayb", "displayn");
				terceiraCol.classList.replace("displayb", "displayn");
				quartaCol.classList.replace("displayb", "displayn");
				quintaCol.classList.replace("displayn", "displayb");
				sextaCol.classList.replace("displayb", "displayn");
				setimaCol.classList.replace("displayn", "displayb");
				oitavaCol.classList.replace("displayb", "displayn");
				semEstoque.classList.replace("displayb", "displayn");
			};
		}

		if ((pesquisa.value == "blusa") || (pesquisa.value == "blusas") || (pesquisa.value == "casaco")) {

			document.getElementById("btnPesquisa").addEventListener("click", pesquisaProdutoBotao);

			function pesquisaProdutoBotao() {
				event.preventDefault()
				primeiraCol.classList.replace("displayb", "displayn");
				segundaCol.classList.replace("displayb", "displayn");
				terceiraCol.classList.replace("displayb", "displayn");
				quartaCol.classList.replace("displayb", "displayn");
				quintaCol.classList.replace("displayb", "displayn");
				sextaCol.classList.replace("displayb", "displayn");
				setimaCol.classList.replace("displayn", "displayb");
				oitavaCol.classList.replace("displayb", "displayn");
				semEstoque.classList.replace("displayb", "displayn");
			};
		}

		if ((pesquisa.value == "top") || (pesquisa.value == "short") || (pesquisa.value == "shorts")) {

			document.getElementById("btnPesquisa").addEventListener("click", pesquisaProdutoBotao);

			function pesquisaProdutoBotao() {
				event.preventDefault()
				primeiraCol.classList.replace("displayb", "displayn");
				segundaCol.classList.replace("displayb", "displayn");
				terceiraCol.classList.replace("displayb", "displayn");
				quartaCol.classList.replace("displayb", "displayn");
				quintaCol.classList.replace("displayb", "displayn");
				sextaCol.classList.replace("displayn", "displayb");
				setimaCol.classList.replace("displayb", "displayn");
				oitavaCol.classList.replace("displayb", "displayn");
				semEstoque.classList.replace("displayb", "displayn");
			};
		}

		if (pesquisa.value == "") {			
				primeiraCol.classList.replace("displayn", "displayb");
				segundaCol.classList.replace("displayn", "displayb");
				terceiraCol.classList.replace("displayn", "displayb");
				quartaCol.classList.replace("displayn", "displayb");
				quintaCol.classList.replace("displayn", "displayb");
				sextaCol.classList.replace("displayn", "displayb");
				setimaCol.classList.replace("displayn", "displayb");
				oitavaCol.classList.replace("displayn", "displayb");
				semEstoque.classList.replace("displayb", "displayn");
		}

		else {
			primeiraCol.classList.replace("displayb", "displayn");
			segundaCol.classList.replace("displayb", "displayn");
			terceiraCol.classList.replace("displayb", "displayn");
			quartaCol.classList.replace("displayb", "displayn");
			quintaCol.classList.replace("displayb", "displayn");
			sextaCol.classList.replace("displayb", "displayn");
			setimaCol.classList.replace("displayb", "displayn");
			oitavaCol.classList.replace("displayb", "displayn");
			semEstoque.classList.replace("displayn", "displayb");
		}
	}