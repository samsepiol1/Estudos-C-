//Variaveis com os modulos
const express = require('express');

const app = express();

const mongoose = require('mongoose')

const bodyParser = require('body-parser');

require('dotenv/config')

app.use(bodyParser.json())

//Rotas importadas

const rotas_post = require('./routes/posts')
//Middleware
app.use('/posts',rotas_post)


//Rotas
app.get('/',(req,res) =>{
    res.send('Seja Bem vindo');

});


// Conexão com o Banco de dados MongoDB

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },() => console.log('Conectado com o banco de dados')
);

//Servidor
app.listen(3000)
console.log('Servidor Rodando na Porta 3000')