const express = require('express');
const app = express();

let porta = 3000;

app.set("json spaces", 4)

app.get('/', (req, res) =>{
    res.json({status: "Ntask API"});
});

app.get('/task', (req, res) =>{
    res.json({
        tasks: [
            {title: "fazer compras" },
            {title: "Colar case do violão"},
        ]
    });
});

app.listen(porta, () =>{
    console.log(`NTask rodando na porta: ${porta}`);
});