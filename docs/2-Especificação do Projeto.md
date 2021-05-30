# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

Maria Alice tem 22 anos, é técnica em produção de moda e estagiária em um museu. Gosta de livros de literatura brasileira e usa ativamente o Instagram. Quer iniciar uma graduação em Moda para futuramente abrir seu ateliê de costura e poder criar seus próprios modelos. Não está muito satisfeita com seu atual emprego. Portanto, busca efetivamente conseguir um que se encaixe melhor com seu perfil para poder progredir na sua carreira. Procura por uma loja de roupas online para comprar modelos de roupas que possa ajudá-la na criação de seus moldes, como também para uso pessoal.

Rafaela tem 36 anos, é graduada em economia e gerente em um banco. Gosta de acompanhar sites noticiários como: brasil.elpais.com e g1.globo.com. Usa as redes socias LinkedIn e Instagram. Ela está satisfeita com sua vida de modo geral, tem um emprego que a deixa satisfeita e uma família harmoniosa. Porém, ela quer se sentir mais empoderada e deseja acabar com um incômodo pessoal a respeito do seu modo de vestir. Como ela acha que não se veste bem e constantemente realiza pesquisas na internet sobre novos visuais para se sentir confortável consigo mesma, ela tem vontade de encontrar um site que a satisfaça.

Vânia tem 30 anos, é graduada em farmácia e fiscal de vigilância sanitária. Twitter, Instagram e Facebook são suas redes sociais preferidas. Está satisfeita com a vida que tem, tanto no pessoal quanto no profissional. Ela é solteira e independente, gosta de sair para se divertir com quem ama, por isso está sempre atenta ao seu visual. Portanto, ela acessa blogs e sites de roupas para pesquisar promoções com frequência. Nos sites e blogs em que ela pesquisa as promoções, nem sempre o produto oferecido é coerente com o seu real desejo, ou seja, ela pesquisa mas nem sempre encontra o que quer, o que gera frustração.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Como Maria Alice    | eu quero comprar modelos de roupas         | para poder criar meus próprios moldes|
|Como Rafaela        | eu quero ganhar desconto na compra de roupas          | quando realizo pagamento à vista |
|Como Vânia          | eu quero comprar roupas em promoção    | para conseguir comprar uma quantidade maior |
|Como cliente        | eu quero comprar roupas de moda            | para renovar meu guarda-roupa|
|Como administrador  | eu preciso permitir a procura e seleção de produtos | de modo que o usuário consiga visualizá-los<br>na vitrine virtual|
|Como cliente        | eu quero cadastrar mais de um produto no carrinho | de forma que eu consiga escolher mais um<br>produto sem finalizar a compra |
|Como administrador  | eu preciso permitir o cadastro de produtos<br>no carrinho ou no favoritos | para que o usuário possa acrescentar quantos<br>produtos quiser|
|Como administrador  | eu preciso alterar as permissões de conta de usuário | para que o usuário consiga criar e administrar<br>uma conta no site|
|Como administrador  | eu preciso permitir a visualização de informações<br>gerais da loja | de forma que o usuário consiga visualizá-las<br>clicando em textos e botões|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Usuário pode criar conta no site após preencher formulário de cadastro | ALTA |
|RF-002| Usuário pode acessar conta no site utilizando login e senha | ALTA |
|RF-003| Usuário com conta no site recebe descontos e visualiza promoções diferentes | ALTA |
|RF-004| Usuário com conta no site tem direito a formas de pagamento diferentes | ALTA |
|RF-005| Usuário pode procurar produto pelo nome em caixa de pesquisa | ALTA |
|RF-006| Usuário pode selecionar produto por categoria em caixa checkbox | ALTA |
|RF-007| Usuário pode retirar produto adicionado ao histórico de itens clicando no "x" | MÉDIA |
|RF-008| Usuário pode adicionar produtos da vitrine virtual ao carrinho | ALTA |
|RF-009| Usuário pode adicionar produtos da vitrine virtual ao favoritos | MÉDIA |
|RF-010| Usuário pode dar feedback do produto | MÉDIA |
|RF-011| Usuário pode escolher a forma de pagamento | ALTA |
|RF-012| Usuário pode solicitar troca do produto na garantia legal | MÉDIA |
|RF-013| Usuário pode clicar em texto no rodapé da página e visualizar regras de frete | BAIXA |
|RF-014| Usuário pode clicar em texto no rodapé da página e visualizar formas de pagamento | BAIXA |
|RF-015| Usuário pode clicar em texto no rodapé da página e visualizar formas de parcelamento | BAIXA |
|RF-016| Usuário pode clicar em texto no rodapé da página e visualizar como trocar o produto | BAIXA |
|RF-017| Usuário pode clicar em texto no rodapé da página e visualizar informações da loja | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  ALTA |
|RNF-003| Coletar dados estatísticos de usuários | MÉDIA |
|RNF-004| Sistema vai cadastar no histórico de seleção de itens os produtos que o usuário procurar | ALTA |
|RNF-005| Adicionar no site uma vitrine virtual | MÉDIA |
|RNF-006| Organizar bem o index da página para que o usuário possa navegar entre os conteúdos da página sem nenhum problema | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                         |
|--|-----------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre no dia 5/07                 |
|02| O projeto terá um limite de gasto no valor de R$ 100.000,00                       |
|03| O limite máximo de profissionais que trabalham no projeto é de 5 pessoas          |
