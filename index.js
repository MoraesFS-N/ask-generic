const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');    
});

app.post('/salvarpergunta', (req, res) => {

    const pergunta = {
        topico: req.body.topico,
        descricao: req.body.descricao
    }

    
   res.send(pergunta);
});


app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App runnig at port 8080");
    }
});