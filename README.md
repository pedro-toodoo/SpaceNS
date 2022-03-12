<h1 align="center"> Space NS API - Node JS </h1>

<h4 align="center">   
A NASA (National Aeronautics and Space Administration), planeja realizar
uma viagem para colonização da espécie humana em alguns planetas
habitáveis, por isso solicitou a você para que criasse uma API em NodeJS
usando o banco de dados SQLite para orientar as naves nessa missão.
</h4>

## Tópicos 
- [Colaboradores](#colaboradores) 
- [Informações da API](#informações-da-api-)
- [Passo a passo da implementação](#passo-a-passo-da-implementação-)
- [Testes de unidade JEST](#testes-de-unidade-jest)
- [Instalações](#instalações-)

# Colaboradores
- <a href="https://github.com/pedro-toodoo">Pedro Abritta</a> (Back-end Node JS)
- <a href="https://github.com/Laminboamorte">Lamin Boa Morte</a> (front-end Android)

# Informações da API 📜
<h4> Foi desenvolvido um banco de dados em SQLite3. O mesmo possui algumas tabelas: </h4>

- Crew (tripulantes), 
- Passengers (passageiros), 
- Planets (planetas), 
- Stars (estrelas),
- Travels (viagens),
- Maps (mapas)

<h4> Além disso, foi feito o consumo da <a href="https://docs.spacexdata.com/">SpaceX API</a> </h4>
<h4> Endpoints criados: </h4>

- /crew (get/post) 
- /passengers (get/post)
- /planets (get/post)
- /stars (get/post)
- /travels (get/post)
- /maps (get/post)
- /api/rockets (get)

 <h4>(Endpoints de /crew e /passengers possuem /login para fazer autenticação de usuários)</h4>

<h3> Para a criação das Spacecrafts e os usuários (tripulantes e passageiros) não há autenticação. Porém, só é possível fazer GET e POST nas outras tabelas se estiver autenticado no sistema através de um email e senha válidos já cadastrados, dessa forma será gerado um TOKEN (que possui validade de 1 dia) que será passado ao fazer as requisições. </h3>


# Passo a passo da implementação 🏃
- ### Acessar a SpaceX API
    <h5>Acessando as informações da SpaceX API e consumindo apenas os dados necessários</h5>
    
    - Nome do foguete
    - Primeiro estágio
    - Segundo estágio
    - Imagem da Logo
    - Link do vídeo do youtube
    - Link do reddit (maioria não possui)
    - Detalhes do lançamento
    - Site do lançamento
    - 2 imagens do lançamento
    - 
- ### Criar Projeto Node 
    <h5>Criar um projeto Node e fazer as instalações das libs necessárias</h5>
    
    ```
    npm init -y
    ```
- ### Fazer deploy em domínio gratuito
    <h5>Foi feito a sincronização deste repositório do git com um app criado no <a href="https://dashboard.heroku.com/apps">HEROKU</a>, dessa forma tudo "commitado" aqui será feito o deploy automaticamente.</h5>
        
# Testes de unidade JEST
<h3> Foi realizado alguns testes para verificar endpoints das tabelas do banco de dados. O arquivo utilizado foi index.spec.js. </h3>

![image](https://user-images.githubusercontent.com/94690905/158018641-17f18442-4767-444a-8a23-1473f10f8a03.png)

# Instalações 🔧

- 1º: instalar o Node:
```
npm install -g npm
```
- 2º: instalar o SQLite:
```
npm install sqlite3 --save
```
- 3º: instalar o nodemon:
```
npm install nodemon --save-dev
```
- 4º: instalar o axios:
```
npm install axios --save
```
- 5º: instalar o JWT:
```
npm install jsonwebtoken --save
```
- 6º: instalar o http, express, debug:
```
npm install http express debug --save
```
- 7º: instalar o md5:
```
npm install md5 --save
```
- 8º: instalar o sequelize:
```
npm i sequelize --save
```
- 9º: instalar o body-parser:
```
npm install body-parser --save
```
- 10º: instalar o JEST:
```
npm install --save-dev jest
```
- 9º: instalar o supertest:
```
npm install supertest --save-dev
```

