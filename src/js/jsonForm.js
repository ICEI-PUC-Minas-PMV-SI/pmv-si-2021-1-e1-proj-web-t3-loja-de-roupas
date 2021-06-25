const inputNome = document.querySelector("#inputNome");
const inputUsuario = document.querySelector("#inputUsuario");
const inputEmail = document.querySelector("#inputEmail");
const inputDDD = document.querySelector("#inputDDD");
const inputCelular = document.querySelector("#inputCelular");
const inputEndereco = document.querySelector("#inputEndereco");
const inputEstado = document.querySelector("#inputEstado");
const inputCidade = document.querySelector("#inputCidade");
const inputCEP = document.querySelector("#inputCEP");
const inputSubmit = document.querySelector("#inputSubmit");





/* Função responsável por salvar os dados */
inputSubmit.addEventListener("click", _ => {

  	let dados = new Array()

  	/* Verifica se a propriedade existe,
	 	caso exista, converte de String para Object */

  	if (localStorage.hasOwnProperty("dados")) {
    	dados = JSON.parse(localStorage.getItem("dados"))
  	}

  	/* Adiciona um novo valor no array criado */
  	dados.push({nome: inputNome.value, usuario: inputUsuario.value, email: inputEmail.value, ddd: inputDDD.value, celular: inputCelular.value, endereco: inputEndereco.value, estado: inputEstado.value, cidade: inputCidade.value, cep: inputCEP.value})

  	/* Salva o item */
  	localStorage.setItem("dados", JSON.stringify(dados))

	})