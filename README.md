<div align="center"> <img src="https://github.com/MariaGabrielaReis/jstack-fincheck-api/assets/69374340/ae3a6f5c-df08-4972-b630-9985bb6dcae3" /> </div>

API para o projeto Fincheck, um app para gerenciamento de finanças pessoais! 💸 <br>
**Aplicação construída em um evento do JStack** :fire:

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Nest, Prisma, Insomnia**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/jstack-fincheck-api.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn
```

Antes de rodar o projeto, crie o arquivo `.env` (na raíz do projeto) com as seguintes variáveis:

```bash
# DATABASE
DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/fincheck?schema=public"
```

Agora execute a aplicação com o comando abaixo, assim o servidor inciará na porta:3333:

```bash
# Execute a aplicação
$ yarn dev
```

> Use o Insomnia, por exemplo, para realizar as requisições (importe a coleção [deste arquivo](./requests_collection))

## :railway_track: Rotas

> Em breve...

<br>

<details>
   <summary>Modelo do banco de dados</summary>
  
<p align="center">
  <img src="https://github.com/MariaGabrielaReis/jstack-fincheck-api/assets/69374340/54676dc8-8315-4190-838b-e8fd6d2ed54a" width=100% />
</p>
</details>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
