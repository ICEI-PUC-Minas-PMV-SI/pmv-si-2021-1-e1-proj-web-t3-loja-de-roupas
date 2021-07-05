const inputNome = document.querySelector("#inputNome");
const inputUsuario = document.querySelector("#inputUsuario");
const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");
const inputDDD = document.querySelector("#inputDDD");
const inputCelular = document.querySelector("#inputCelular");
const inputData = document.querySelector("#inputData");
const inputCEP = document.querySelector("#cep");
const inputEndereco = document.querySelector("#rua");
const inputBairro = document.querySelector("#bairro");
const inputCidade = document.querySelector("#cidade");
const inputEstado = document.querySelector("#uf");
const inputSubmit = document.querySelector("#inputSubmit");

/* Função responsável por salvar os dados */
inputSubmit.addEventListener("click", _ => {

  	let dados = new Array()
		let enderecoArray = new Array()

  	/* Verifica se a propriedade existe,
	 	caso exista, converte de String para Object */

  	if (localStorage.hasOwnProperty("dados")) {
    	dados = JSON.parse(localStorage.getItem("dados"))
  	}

  	/* Adiciona um novo valor nos arrays criados */

		enderecoArray.push({cep: inputCEP.value, endereco: inputEndereco.value, bairro: inputBairro.value, cidade: inputCidade.value, estado: inputEstado.value})

		let endereco = "";
		for (let i = 0; i < enderecoArray.length; i++) {
  		endereco += enderecoArray.length[i] + ", ";
			!enderecoArray.length[i] > 0;
		}

  	dados.push({nome: inputNome.value, usuario: inputUsuario.value, email: inputEmail.value, senha: inputSenha.value, ddd: inputDDD.value, celular: inputCelular.value, datanasc: inputData.value, endereco: enderecoArray.valueOf()})

  	/* Salva o item */
  	localStorage.setItem("dados", JSON.stringify(dados))
	})