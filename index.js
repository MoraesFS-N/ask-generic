const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')    
})

app.post('/salvapergunta', (req, res) => {
    var dados = req.body
})


app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App runnig at port 8080");
    }
})