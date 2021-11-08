# ORM - Mapeamento objeto-relacional

- Basicamente é uma forma mais fácil para trabalhar com banco de dados.
- Podemos chamar de framework para banco de dados.
- Um ORM pode tratar bancos relacionais (Mysql, Postgres e etc) e/ou não relacionais (MongoDB e etc).
- ORMs mais conhecidos para bancos relacionais: Sequelize e typeorm.
- ORMs mais conhecidos para os banco não relacionais: Mongoose.

# Conceitos básicos

- Obs: Nem todos os conceitos se aplicam a todos os ORMs, mas geralmente seu uso é parecido.

### Migrations

- São basicamente o git do nosso banco de dados.
- Onde guardamos o que está sendo feito e o que fazer caso desejamos voltar o banco para um estado anterior ao da migration.
- É por onde de fato o ORM inclui ou remove atributos e/ou relacionamentos do banco de dados.

### Entidades ou Models

- São a representação da entidade do banco no nosso back-end.

### Repository (Repositório)

- Responsável por realizar querys no banco de dados.

### Seeders

- Responsável por criar dados padrões no nosso banco de dados.
