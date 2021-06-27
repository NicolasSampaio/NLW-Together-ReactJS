<p align="center">
  <img alt="Letmeask" src=".github/logo.svg" width="160px">
</p> 

<h1 align="center">
    <img alt="Letmeask" src=".github/cover.svg" />
</h1>

<br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como executar

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário criar uma conta no [Firebase](https://firebase.google.com/) e um projeto para disponibilizar um Realtime Database.

## 💻 Projeto

Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática. 

Este é um projeto desenvolvido durante a **[Next Level Week Together](https://nextlevelweek.com/)**, apresentada dos dias 20 a 27 de Junho de 2021.


## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web](https://www.figma.com/file/u0BQK8rCf2KgzcukdRRCWh/Letmeask/duplicate) 

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).


## 😏 Para o Nicolas do futuro

Foram utilizados os seguintes comandos, e instalados as seguintes bibliotecas.


```bash
# Criando projeto React
$ yarn create react-app letmeask --template typescript
```
```bash
# SDK Firebase
$ yarn add firebase
```
```bash
# Instalando sass
$ yarn add node-sass@^5.0.0
```
```bash
# Biblioteca de roteamento para React
$ yarn add react-router-dom 
```
```bash
# Pacote de types para react-router-dom funcionar com typescript
$ yarn add @types/react-router-dom 
```
```bash
# Pacote para usar classe css de forma dinâmica(ng-class)
$ yarn add classnames
```
```bash
# Pacote de ferramentas para hospedar no firebase
$ npm install -g firebase-tools
```


## 🤠 Must-Have (Lista pessoal)
- [x] Ao criar uma sala ser redirecionado como admin
- [x] Clicar na imagem e ir para a home
- [x] Quando não haver perguntas exibir uma imagem
- [x] Entrar na sala e reconhecer que sou admin
- [ ] Refatorar o html que tá sendo usado pelo componente de admin e user normal, e mesclar os 2 componentes em um só para evitar código duplicado
- [ ] Corrigir o permissionamento de admin que foi feita usando params(😥😥😥)
- [ ] Adicionar responsividade

## 😍 Nice-To-Have (Lista pessoal)
Essa aplicação foi feita na semana da nlw acompanhando as video-aulas, criei essa lista para apontar melhorias
- [ ] Sair do Realtime e utilizar firestore
- [ ] Possibilitar a pessoa escolher o nome da sala utilizado para conseguir entrar
- [ ] PWA
- [ ] Darkmode
- [ ] Biblioteca CSS - Styled Components
- [ ] EsLint, Prettier

---

Feito com 💜 with Rocketseat 👋🏻 [Participe da nossa comunidade](https://discord.gg/gKUVrzrPrU)
