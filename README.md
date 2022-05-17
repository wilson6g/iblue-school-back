<h1 align="center">
     🖩 <a href="#" alt="site do ecoleta"> Calculadora Web </a>
</h1>

<h3 align="center">
    🖩 Uma calculadora perfeita para ensinar alunos do fundamental I e II.
</h3>

<h4 align="center">
	🚧   Concluído ✔️ 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [Website](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
<!--te-->


## 💻 Sobre o projeto

🏫 Desafio calculadora - é uma calculadora pensada para escolas que desejam ensinar seus alunos do Ensino Fundamental I e II a manusear uma calculadora.

Projeto desenvolvido durante o **Programa de Estágio da IBlue Consulting** oferecido pela [IBlueConsulting](https://www.iblueconsulting.com.br/).

---

## ⚙️ Funcionalidades

- [x] Os estudantes podem se cadastrar na plataforma web enviando:
  - [x] um e-mail válido
  - [x] uma senha válida
  - [x] e escolhendo a sua escolaridade

- [x] Os usuários tem acesso a uma calculadora dependendo da sua escolaridade, onde podem realizar as seguintes operações:
  - Fundamental I:
    - [x] Somar
    - [x] Subtrair
    - [x] Multiplicar
    - [x] Dividir
  - Fundamental II:
    - [x] Somar
    - [x] Subtrair
    - [x] Multiplicar
    - [x] Dividir
    - [x] Porcentagem
    - [x] Raiz quadrada

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend 
2. Frontend

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). [Mysql](https://dev.mysql.com/downloads/installer/), Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git
# Acesse a pasta do projeto no terminal/cmd
$ cd iblue-school-back
# Instale as dependências
$ npm install ou yarn install
# Crie um arquivo .env na raiz do projeto
$ touch .env ou crie um arquivo pela IDE
# Vá para o arquivo .env.example
$ copie os dados do .env.example e cole no .env
# Altere os dados do .env 
$ Mude para os dados do seu ambiente
# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev
# O servidor iniciará na porta:3333 por padrão - acesse http://localhost:3333
# Observação: Essa porta é referente ao NODE_PORT presente no .env, se você alterar, terá que mudar a porta "3333" para a que você definiu. 
```

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone git@github.com:tgmarinho/README-ecoleta.git
# Acesse a pasta do projeto no terminal/cmd
$ cd iblue-school-front
# Instale as dependências
$ npm install ou yarn install
# Crie um arquivo .env na raiz do projeto
$ touch .env ou crie um arquivo pela IDE
# Vá para o arquivo .env.example
$ copie os dados do .env.example e cole no .env
# Altere os dados do .env 
$ Altere a porta ex: http://localhost:SUAPORTADOBACK
# Execute a aplicação em modo de desenvolvimento
$ npm run serve ou yarn serve
# O servidor iniciará na porta:8080 por padrão - acesse http://localhost:8080
# Observação: Essa aplicação só vai funcionar perfeitamente com o backend em node rodando em paralelo, ou seja, ao mesmo tempo. 
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Vue](https://vuejs.org/))

-   **[Axios](https://github.com/axios/axios)**
-   **[toastify-js](https://www.npmjs.com/package/toastify-js)**
-   **[vue-router](https://router.vuejs.org/)**

#### **Server**  ([NodeJS](https://nodejs.orgen/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[mysql2](https://github.com/mapbox/node-sqlite3)**
-   **[sequelize](https://sequelize.org/)**
-   **[nodemon](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Joi](https://github.com/hapijs/joi)**
-   **[mocha](https://mochajs.org/)**
-   **[uuidv4](https://www.npmjs.com/package/uuidv4)**
-   **[chai](https://www.chaijs.com/)**
-   **[chai-http](https://www.chaijs.com/plugins/chai-http/)**
-   **[bcrypt](https://www.npmjs.com/package/bcrypt)**
-   **[body-parser](https://www.npmjs.com/package/body-parser)**

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Ferramenta de banco de dados: **[DBeaver](https://dbeaver.io/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Fontes: **[Roboto](https://fonts.google.com/specimen/Roboto)**

## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87429689?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wilson Pinheiro</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/twitter/url?label=LINKEDIN&logo=linkedin&style=social&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwilsonpinh%2F)](https://www.linkedin.com/in/wilsonpinh/) 

Feito por Wilson Pinheiro, com o objetivo de realizar o desafio final para vaga de estágio. 😀 [Entre em contato!](https://www.linkedin.com/in/wilsonpinh/)
