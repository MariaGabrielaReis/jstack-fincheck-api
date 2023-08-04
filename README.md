<div align="center"> <img src="https://github.com/MariaGabrielaReis/jstack-fincheck-api/assets/69374340/e2aca505-b920-449c-9f30-b6f840761096" /> </div>

API para o projeto Fincheck, um app para gerenciamento de finanças pessoais! 💸 <br>
**Aplicação construída em um evento do JStack** :fire:

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Node, Nest, Prisma, Docker, Insomnia**

<br>

<details>
   <summary>Modelo do banco de dados</summary>
  
<p align="center">
  <img src="https://github.com/MariaGabrielaReis/jstack-fincheck-api/assets/69374340/54676dc8-8315-4190-838b-e8fd6d2ed54a" width=100% />
</p>
</details>

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
JWT_SECRET=
```

Agora execute a aplicação com o comando abaixo, assim o servidor inciará na porta:3333:

```bash
# Execute a aplicação
$ yarn dev
```

> Use o Insomnia, por exemplo, para realizar as requisições (importe a coleção [deste arquivo](./requests_collection)). <br/> **OBS:** Por conta do uso de tokens JWT (neste caso, válidos apenas por **7 dias**), será preciso fazer _signup_ e atualizar com o novo token as variáveis de ambiente antes de realizar requisições.

## :railway_track: Rotas

<details>
 <summary>Endpoints disponíveis para <b>Autenticação</b></summary>
 <br>

|                                                                  Tipo | Ação                    | Caminho          |
| --------------------------------------------------------------------: | :---------------------- | :--------------- |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Sign in (entrar)        | `/auth/signin`   |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Sign up (se cadastrar)  | `/auth/signup`   |

</details>

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Usuários</b></summary>
 <br>

|                                                                  Tipo | Ação                           | Caminho        |
| --------------------------------------------------------------------: | :----------------------------- | :------------- |
|  [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Obter dados do usuário logado  | `/me`          |

</details>

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Categorias</b></summary>
 <br>

|                                                                  Tipo | Ação              | Caminho       |
| --------------------------------------------------------------------: | :---------------- | :------------ |
|  [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar categorias | `/categories` |

</details>

<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Contas Bancárias</b></summary>
 <br>

|                                                                    Tipo | Ação                   | Caminho                         |
| ----------------------------------------------------------------------: | :--------------------- | :------------------------------ |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar contas          | `/bank-accounts`                |
|   [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar conta            | `/bank-accounts`                |
|    [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | Atualizar conta        | `/bank-accounts/:bankAccountId` |
| [![](https://img.shields.io/badge/DELETE-e6373d?style=for-the-badge)]() | Deletar conta          | `/bank-accounts/:bankAccountId` |

</details>
<details>
 <summary>Endpoints disponíveis para gerenciamento de <b>Transações</b></summary>
 <br>

|                                                                    Tipo | Ação                       | Caminho                         |
| ----------------------------------------------------------------------: | :------------------------- | :------------------------------ |
|    [![](https://img.shields.io/badge/GET-2E8B57?style=for-the-badge)]() | Listar transações          | `/transactions`                |
|   [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar transação            | `/transactions`                |
|    [![](https://img.shields.io/badge/PUT-9370DB?style=for-the-badge)]() | Atualizar transação        | `/transactions/:transactionId` |
| [![](https://img.shields.io/badge/DELETE-e6373d?style=for-the-badge)]() | Deletar transação          | `/transactions/:transactionID` |

</details>

<br>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-009973?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
