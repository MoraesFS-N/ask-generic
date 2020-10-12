const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get("/:nome/:idade", (req, res) => {

    var nome = req.params.nome;
    var idade = req.params.idade;
    var exibeMsg = false;

    res.render('index', {
        nome: nome,
        idade: idade,
        empresa: "DB - System",
        faculdade: "Sistemas de informção iffar",
        msg: exibeMsg
    });
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App runnig at port 8080");
    }
})