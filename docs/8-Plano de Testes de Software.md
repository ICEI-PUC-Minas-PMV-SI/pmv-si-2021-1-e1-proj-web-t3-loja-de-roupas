# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
	
	



Bruthelo Moda Feminina 



Plano de Testes
Versão: 1.0 







Integrantes da Equipe
Bruno
Theo
Luiz




 
DESCRIÇÃO DO DOCUMENTO

OBJETIVO	Plano de teste do software Bruthelo Moda Feminina
LOCALIZAÇÃO
	 GitHub

HISTÓRICO DE VERSÕES DO DOCUMENTO

VERSÃO	DESCRIÇÃO	DATA	RESPONSÁVEL
0.1.0	Index da página principal	07/06/2021	Theo
0.1.0	Upload do arquivo Zip do Projeto	14/06/2021	Luiz
0.1.0	Atualização das páginas principais e adição dos arquivos Javascript	19/06/2021	Theo
0.2.0	Adição da página “Cadastro de usuário”	20/06/2021	Bruno
0.2.0	Layout, ajuste visual das páginas	22/07/2021	Luiz
0.2.0	Adição funcionais dos ícones e formulários, Conta, Carrinho, Favoritos	23/06/2021	Luiz
0.2.0	Teste de validação do campo número de telefone	23/06/2021	Theo
0.2.0	Ajuste e revisão de consistência dos módulos dos ícones funcionais	24/06/2021	Luiz
0.2.0	Ajuste do código das páginas: Inicial, Cadastro e Carrinho	24/06/2021	Theo
			
			
			
			
			
			

APROVAÇÕES INTERNAS

PERFIL	NOME	DATA
Analista de Sistemas	XXXX	XX/XX/XXXX
Analista de Qualidade	XXXX	XX/XX/XXXX

 
ÍNDICE

1.	VISÃO GERAL	4
1.1	OBJETIVO	4
1.2	DESCRIÇÃO DO PRODUTO A SER TESTADO	4
2.	ESCOPO	4
2.1	DESCRIÇÃO DE CASOS DE USO	4
3.	ITENS-ALVO DOS TESTES	4
4.	RESUMO DOS TESTES PLANEJADOS	4
5.	CATEGORIAS DE TESTES	5
5.1	TESTE DE FUNCIONALIDADE	5
5.2	TESTE DE SEGURANÇA	5
5.3	TESTE DE USABILIDADE	5
5.4	TESTE DE PERFORMANCE	5
5.5	TESTE DE CARGA	5
5.6	TESTE DE CONFIGURAÇÃO	5
5.7	TESTE DE RECUPERAÇÃO	5
5.8	TESTE DE CONTINGÊNCIA	5
6.	RELATÓRIO DE DEFEITOS	5
7.	FLUXO DE TRABALHO DE TESTE	6
8.	RECURSOS	6
8.1	HARWARE	6
8.2	SOFTWARE	6
9.	RESPONSABILIDADES, PERFIL DA EQUIPE E NECESSIDADES DE TREINAMENTO	6
9.1	PESSOAS E PAPÉIS	6
9.2	NECESSIDADES DE TREINAMENTO	7
10.	CRONOGRAMA E MARCOS DO PROJETO	7

 
1.	 VISÃO GERAL

1.1	Objetivo

O documento do Plano de Testes tem como objetivo listar os Requisitos que serão testados recomendando e descrevendo as estratégias a serem empregadas nesses testes. Este documento também identifica os recursos necessários e disponibiliza uma estimativa dos esforços de teste.

1.2	Descrição do produto a Ser Testado

Software tem como objetivo a gestão e logística de uma loja de roupas femininas em ambiente Web.

2.	ESCOPO

2.1	Descrição de Casos de Uso

Filtro de produtos

3.	ITENS-ALVO DOS TESTES

1 - Usuário pode criar conta no site após preencher formulário de cadastro
2 - Usuário pode acessar conta no site utilizando login e senha	
3 - Usuário pode procurar produto pelo nome em caixa de pesquisa
4 - Usuário pode escolher a forma de pagamento
5 - Usuário pode clicar em texto no rodapé da página e visualizar regras de frete

4.	RESUMO DOS TESTES PLANEJADOS

1.0 – Criar a conta do usuário
1.1 – Acessar a tela de cadastro do usuário
1.2 – Usuário preenche o Nome, Nome de usuário, E-Mail, DDD, Celular, Endereço, Estado, Cidade, CEP
1.3 – Usuário clica no botão Enviar
1.4 – Aparece a mensagem Cadastro concluído

2.0 – Acesso a conta do usuário
2.1 – Usuário preenche o e-mail
2.2 – Usuário preenche a senha
2.3 – Usuário tem a opção de clicar na opção chekbox lembre de mim
2.4 – Usuário clica no botão Entrar
2.5 – Usuário e direcionado a Pagina principal logado em sua conta

3.0 – Pesquisas por produtos na barra de navegação
3.1 – Usuário preenche a caixa de pesquisa
3.2 – Usuário clica no botão pesquisa
3.3 – O Resultado e filtrado e aparece os produtos na vitrine

4.0 – Escolher a forma de pagamento
4.1 – O usuário clica no ícone carrinho
4.2 – O usuário preenche o Endereço de Entrega, País, Estado, CEP
4.2 – O usuário clica no checkbox Cartão de crédito ou Cartão de débito ou PayPal
4.2 – O usuário preenche o Nome do cartão, Número do cartão, Vencimento, CVV
4.2 – O usuário clica no botão Continue para finalizar a compra
4.2 – Aparece a mensagem Efetuada com sucesso

5.0 – Visualizar as regras de frete
5.1 – Usuário clica no botão Frete localizado no rodapé
5.2 – Aparece uma mensagem com as informações do tipo de frete
