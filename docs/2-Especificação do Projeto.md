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
|Como Maria Alice         | eu quero comprar modelos de roupas                     | para que eu possa criar meus próprios moldes|
|Como Maria Alice         | eu quero comprar roupas                     | para eu mesma usar|
|Como Rafaela             | eu quero comprar roupas                     | que satisfaçam meu gosto e aumentem a minha auto-estima|
|Como Rafaela             | eu quero comprar roupas                     | com desconto|
|Como Vânia               | eu quero comprar roupas                     | em promoção|
|Como Vânia               | eu quero comprar roupas                     | que satisfaçam meu gosto|
|Como Vânia               | eu quero comprar roupas                     | com desconto e com pagamento parcelado|
|Como Vânia               | eu quero conseguir cadastrar mais de um produto no carrinho | para não ter que ficar voltando na página anterior e fazer um novo pedido |
|Como administrador       | eu preciso permitir o cadastro de mais de um produto no carrinho | para que o usuário possa acrescentar quantos produtos quiser em sua compra|
|Como administrador       | eu preciso alterar as permissões de conta de usuário | para que o usuário possa administrar sua conta|
|Como usuário do sistema  | eu preciso registrar minhas tarefas           | para não esquecer de fazê-las |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-003| Poder criar conta no site usando login e senha | ALTA |
|RF-004| Garantia de produtos para o cliente | MÉDIA |
|RF-005| Atendimento ao cliente | MÉDIA |
|RF-006| Cliente poder dar o feedback do produto | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA |
|RNF-003| Coletar dados estatísticos de usuários | MÉDIA |
|RNF-004| Adicionar um sistema anti-hacker | ALTA |
|RNF-005| Adicionar um bom servidor | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                         |
|--|-----------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre no dia 5/07                 |
|02| Não pode ser desenvolvido um módulo de backend                                    |
|03| O projeto terá um limite de gasto no valor de R$ 100.000,00                       |
|04| O limite máximo de profissionais que trabalham no projeto será de 5 pessoas       |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
