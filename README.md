# 🐾 GPA API

API REST desenvolvida para o gerenciamento de animais, adotantes e processos de adoção.

## 📌 Sobre o projeto

A **GPA API** é uma API REST desenvolvida para facilitar o gerenciamento de informações relacionadas à adoção de animais.

O projeto permite cadastrar, consultar, atualizar e excluir dados de **animais**, **adotantes** e **adoções**, utilizando um banco de dados MongoDB.

A API também possui documentação interativa utilizando o **Swagger**, permitindo visualizar e testar os endpoints disponíveis.

## 🎯 Objetivo

O objetivo da GPA API é oferecer uma solução para organizar e gerenciar o processo de adoção de animais, permitindo:

* 🐶 Gerenciar animais;
* 👤 Gerenciar adotantes;
* 🏠 Gerenciar adoções;
* 🔎 Consultar informações cadastradas;
* ✏️ Atualizar registros;
* 🗑️ Excluir registros.

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* **Node.js** — ambiente de execução JavaScript;
* **Express** — framework utilizado para criação da API REST;
* **MongoDB Atlas** — banco de dados NoSQL utilizado para armazenamento das informações;
* **Mongoose** — biblioteca para modelagem e comunicação com o MongoDB;
* **Swagger** — documentação e testes dos endpoints da API;
* **Insomnia** — ferramenta utilizada para realizar testes nas requisições da API;
* **Figma** — utilizado para criação do protótipo da aplicação.

O projeto utiliza módulos ES (`"type": "module"`) e possui o comando `npm start` para iniciar a API.

## 📂 Estrutura / Entidades

A API possui três principais entidades:

### 🐶 Animal

Representa os animais disponíveis para adoção.

Entre as informações armazenadas estão os dados e características do animal.

### 👤 Adotante

Representa as pessoas interessadas em realizar uma adoção.

Também são armazenadas informações relacionadas ao adotante, incluindo seu endereço.

### 🏠 Adoção

Representa o processo de adoção, relacionando o animal ao adotante.

## ⚙️ Funcionalidades

A API permite realizar as principais operações CRUD:

* **Cadastrar** novos registros;
* **Consultar** registros;
* **Consultar um registro específico**;
* **Atualizar** registros;
* **Excluir** registros.

As operações estão disponíveis para as entidades de animais, adotantes e adoções.

### 📄 Documentos aninhados

O projeto também trabalha com informações organizadas dentro dos documentos, como:

* Características do animal;
* Endereço do adotante.

## 🔗 Endpoints da API

### 🐶 Rotas de Animal

| Método | Endpoint      | Função                        |
| ------ | ------------- | ----------------------------- |
| GET    | `/animais`    | Lista todos os animais        |
| GET    | `/animal/:id` | Consulta um animal específico |
| POST   | `/animal`     | Cadastra um novo animal       |
| PUT    | `/animal/:id` | Atualiza um animal            |
| DELETE | `/animal/:id` | Exclui um animal              |

As rotas de animais estão implementadas no arquivo `animalRoutes.js`.

### 👤 Rotas de Adotante

| Método | Endpoint        | Função                          |
| ------ | --------------- | ------------------------------- |
| GET    | `/adotantes`    | Lista todos os adotantes        |
| GET    | `/adotante/:id` | Consulta um adotante específico |
| POST   | `/adotante`     | Cadastra um novo adotante       |
| PUT    | `/adotante/:id` | Atualiza um adotante            |
| DELETE | `/adotante/:id` | Exclui um adotante              |

As rotas de adotantes estão implementadas no arquivo `adotanteRoutes.js`.

### 🏠 Rotas de Adoção

| Método | Endpoint      | Função                         |
| ------ | ------------- | ------------------------------ |
| GET    | `/adocoes`    | Lista todas as adoções         |
| GET    | `/adocao/:id` | Consulta uma adoção específica |
| POST   | `/adocao`     | Cadastra uma nova adoção       |
| PUT    | `/adocao/:id` | Atualiza uma adoção            |
| DELETE | `/adocao/:id` | Exclui uma adoção              |

As rotas de adoção estão implementadas no arquivo `adocaoRoutes.js`.

## 📚 Documentação Swagger

A API possui uma documentação interativa utilizando o **Swagger**, onde é possível visualizar os endpoints disponíveis e realizar testes nas requisições.

Após iniciar a API, a documentação pode ser acessada em:

```text
http://localhost:3000/api-docs
```

A rota `/api-docs` é configurada diretamente no arquivo principal da aplicação.

## 🧪 Testes

### Insomnia

O **Insomnia** foi utilizado para realizar testes nos endpoints da API, verificando as requisições de cadastro, consulta, atualização e exclusão.

### MongoDB Atlas

O **MongoDB Atlas** é utilizado para armazenar os dados da aplicação em um banco de dados MongoDB.

## 🎨 Protótipo

O protótipo da aplicação foi desenvolvido utilizando o **Figma**.

🔗 **Link do protótipo:**
(https://www.figma.com/design/oODXSyft8uwliPRclT5Tgl/Untitled?node-id=0-1&t=bqdiGemBUdffjA4d-1)

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/thaisnasci/gpa-api.git
```

### 2. Entrar na pasta do projeto

```bash
cd gpa-api
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as informações necessárias para conexão com o banco de dados MongoDB.

Exemplo:

```env
MONGODB_URI=sua_string_de_conexao
PORT=3000
```

> ⚠️ Não compartilhe sua string de conexão do MongoDB nem outras informações sensíveis no GitHub.

### 5. Executar a API

```bash
npm start
```

A API será executada, por padrão, na porta `3000`.

```text
http://localhost:3000
```

A documentação Swagger estará disponível em:

```text
http://localhost:3000/api-docs
```

O projeto utiliza `node index.js` no comando `npm start` e define a porta padrão como `3000`.

## 👥 Integrantes

* **Thais do Nascimento Silva**
* **Giovanna Agatha Pereira Morais**
* **Mayra Coutinho da Costa**

---

## 📌 Repositório

🔗 [GPA API — GitHub](https://github.com/thaisnasci/gpa-api)
