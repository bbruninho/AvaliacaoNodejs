const express = require('express');

const app = express();

app.get("/Soma/", (req, res) => {
    // http://localhost:3000/Soma/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ message: resultado })
})

app.get("/Subtração/", (req, res) => {
    // http://localhost:3000/Subtração/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) - Number(num2);

    res.json({ message: resultado })
})

app.get("/Divisão/", (req, res) => {
    // http://localhost:3000/Divisão/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) / Number(num2);

    res.json({ message: resultado })
})
app.get("/Multiplicação/", (req, res) => {
    // http://localhost:3000/Multiplicação/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) * Number(num2);

    res.json({ message: resultado })
})

app.get("/Raiz/", (req, res) => {
    // http://localhost:3000/Raiz/?num1=0&num2=3
    const num1 = req.query.num1
    
    const resultado = Math.sqrt(num1);

    res.json({ message: resultado })
})

app.get("/Potência/", (req, res) => {
    // http://localhost:3000/Potência/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num1


    const resultado = Math.pow(num1,num2);

    res.json({ message: resultado })
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})