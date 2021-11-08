# EDIFPI NODEJS API EXAMPLE

# Nodejs

- Pode ser explicado como ambiente de execução do Javascript no servidor.
- Caracterizado pelo seu assincronismo, ou seja, não bloquear o fluxo do programa enquanto algumas coisa está processando, mas abrir uma nova camada de execução para concluir aquela tarefa. (thread)
- Sua velocidade para desenvolvimento de aplicações back-end.
- Empresas que usam nodejs: LinkedIn, Netflix, IBM, Uber, Walmart, PayPal, PayPal e MB LABS.
- Diferente de um front-end, o banck-end irá retornar dados e não telas.

# Conceitos básicos

### Requisição

- Chamada realizada por um front-end (app, web e etc) para o back-end.
- Tem como principal parte o `body, params, querys e headers`.

### Body, Params, Querys e Headers.

- Body:
  - Corpo da requisição.
  - É onde o front-end manda dados de um recurso para o back-end.
  - Geralmente utilizado em requisições do tipo POST ou PUT.
- Params:
  - Parâmetros de uma requisição.
  - Ele vem na rota de uma requisição, para que a mesma seja dinâmica, uma vez que o parâmetro enviado pela rota pode mudar.
  - Parâmetros quando usados, obrigatoriamente tem de ser enviado na rota.
  - Exemplo (Pegar um produto por id `/products/:id`): `products/1`, `products/2`.
- Querys:
  - Consultas de uma requisição.
  - As consultas servem para o front-end informar ao back-end alguma especificação sobre um recurso.
  - Muito utilizado para paginação de dados a serem retornados pelo back-end.
  - Exemplo (Páginação): `/products?pagina=1&limitePorPagina=10`.
- Headers:
  - São o cabeçalho das requisições.
  - É por ele que enviamos dados mais sensíveis do front-end para um back-end no qual não é diretamente ligado ao recurso que estamos acessando.
  - Note que mesmo sendo utilizados para envio de dados mais sensíveis, ele não efetua nenhum tipo de criptografia ou algo do tipo.
  - Geralmente utilizado para envio de tokens de autenticação de usuários para o back-end.
  - Exemplo (token jwt): `Bearer token-jwt`.

### Endpoints / Rotas

- Por onde são acessados recursos do back-end.
- Uma rota pode conter params e querys.
- Quando uma rota utiliza params, o mesmo se torna obrigatório na chamada da mesma.
- Utilização de params: `/rota/:id`, significa que vamos acessar um recurso por id, dependendo do métodos http utilizado o mesmo irá mudar (ainda será explicado.)
- Utlizando querys: `/rota?pagina=1&limitePorPagina=10`, separando cada elemento da query por `&`.
- É preciso sempre, se atentar a o método HTTP utilizado. (Ainda será explicado)

# HTTP - HyperText Transfer Protocol

Protocolo de Transferência de HiperTexto

### Visão Geral

- Permite troca de informações e dados na internet
- É um protocolo client-server, o que significa que uma requisição é feita pelo cliente, geralmente por um navegador da Web, e o servidor vai retornar uma resposta. (json, xml e etc)

### MÉTODOS HTTP

- GET: Recebe dados de um(ns) recurso(s).
- POST: Enviar dados ou informações para serem processados por um recurso.
- PUT: É enviado e atualizado todo o recurso.
- PATCH: É atualizado apenas uma parte do recurso. (Na prática geralmente utilizamos o PUT, mesmo de forma incorreta)
- DELETE: Deleta um recurso.

### STATUS DAS RESPOSTAS HTTP

- 1xx: Informação
- 2xx: Sucesso
  - 200: Sucesso na requisição
  - 201: Algo foi criado
- 3xx: Redirecionamento (Praticamente nunca usado)
- 4xx: Erro do front-end
  - 400: Bad Request (Enviou dados errados)
  - 404: Not Found (Não existe o recurso ou o rota do back-end)
- 5xx: Erros internos do servidor

# REST e RESTFUL

- REST: É um conjunto de restrições para a arquitetura de um back-end.
- RESTFUL: Um back-end que é construído seguindo as restrições do REST

### Como se tornar RESTFUL de forma prática

- ENDPOINT: Manter a nomenclatura dos endpoints, no qual devem sempre descrever bem o recurso que o mesmo está englobando. Além de que deve-se sempre ser singular ou plural, mas o importante é que seja seguido do começo ao fim.
- HTTP: É muito importante que sejam seguidos à risca o protocolo http, fazendo bom uso principalmente dos seus métodos e status.
- REQUISIÇÃO E RESPOSTA: Toda requisição do front-end deve obter uma resposta da API.

# Arquitetura mais utilizada no mundo Nodejs.

- No mundo Node, na grande maioria das aplicações a arquitetura é dividida em camadas e cada camada tem sua responsabilidade.
- Geralmente as camadas são divididas em: Controller, Service, Repository / Mechanism e Entity.

### Controllers (Controladores)

- Responsável por receber a requisição e retornar a resposta.
- Não deve conter regras de negócio.
- Deve conter as validações síncronas do endpoint.
- Envia dados da requisição para o service (body, params, query e etc).

### Service (Serviços)

- Recebe os dados do controller e aplica regras de negócios sobre o mesmo.
- Envia os dados tratados para o repository e/ou mechanins.

### Repository (Repositório)

- Recebe dados do service e faz uma busca no banco de dados.
- Não deve conter lógica de negócio, apenas deve conter lógica relacionadas a buscas no banco.
- Deve retornar uma entidade, retornar muitas, atualizar ou deletar uma do banco de dados.

### Mechanism (Mecanismos)

- Diferente do repository, ele não faz uma busca no banco de dados, mas é responsável por integrações no nosso back-end.
- Uma integração no nodejs, pode ser o envio de e-mails, mensagens de texto por sms, gateways de pagamento e etc.

### Entity (Entidades)

- Basicamente é a classe que reprenta uma entidade do banco de dados no nodejs.

# Nomenclaturas:

- Client: Parte visual dos sistemas, seja app, web e etc.
- Server: É o back-end da aplicação.
- Endpoint: Basicamente é uma rota do back-end, como `/produtos` ou /`products/4`.
- HiperTexto: São textos que podem ter imagens, áudios, links para outros textos.
- JWT: JSON Web Token, geralmente utilizado para autenticação e autorização no back-end
