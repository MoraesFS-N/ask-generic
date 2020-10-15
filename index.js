const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const { raw } = require('body-parser');

connection.authenticate()
    .then(() => {
    console.log('Conexão estabelecida');
    })
    .catch((err) => {
    console.log(`Erro ao conectar ao banco de dados:${err}`);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/perguntar', (req, res) => {
    res.render('perguntar');    
});

app.post('/salvarpergunta', (req, res) => {

    const pergunta = {
        topico: req.body.topico,
        descricao: req.body.descricao
    }

    Pergunta.create({
        topic: pergunta.topico,
        description: pergunta.descricao
    }).then(() => {
        res.redirect('/');
    })

});


app.get('/', (req, res) => {
    Pergunta.findAll({raw:true, order:[['id','DESC']]}).then(perguntas=>{
        res.render('index', {
            perguntas: perguntas
        });   
    });
   
});


app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App runnig at port 8080");
    }
});