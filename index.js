const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/:nome/:idade", (req, res) => {

    var nome = req.params.nome;
    var idade = req.params.idade;
    var exibeMsg = false;

    var produtos = [{
            nome: "Pastel",
            preco: 5.00
        },
        {
            nome: "Enroladinho",
            preco: 4.00
        },
        {
            nome: "Bolo",
            preco: 3.00
        },
        {
            nome: "Refrigerante",
            preco: 7.00
        },
        {
            nome: "Salgadinho",
            preco: 5.00
        }
    ]

    res.render('index', {
        nome: nome,
        idade: idade,
        empresa: "DB - System",
        faculdade: "Sistemas de informção iffar",
        msg: exibeMsg,
        produtos: produtos
    });
})

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App runnig at port 8080");
    }
})