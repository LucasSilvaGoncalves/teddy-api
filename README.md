# Description

Project Teddy API

## Perguntas sobre o projeto (backend)

Levando em consideração as seguintes features:
1. Gestão de usuários (CRUD + Nivel de acesso)
2. Autenticação / Autorização
3. Reset de senha
4. Seguir padrão de projeto + Teste unitários.

##

1. Quanto tempo levaria?
- R: 2 semanas a 3 semanas
2. Quantos desenvolvedores?
- R: 2 devs backend
3. Qual a senioridade dos desenvolvedores?
- R: Plenos

# Project setup:


## Environment 
Use [.env.example](.env.example) for template of environment.

## Database (Postgres)
Create table query:

```bash
CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  salary FLOAT NOT NULL,
  client_salary FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


## Init Project 
```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run build
$ npm run start

# watch mode
$ npm run start:dev

```

## Run tests

```bash
# unit tests
$ npm run test
```
