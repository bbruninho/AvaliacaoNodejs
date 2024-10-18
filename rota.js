
const express = require('express');
const calculations = require('./calculations');

const router = express.Router();

router.get("/Soma/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.soma(num1, num2);
    res.json({ message: resultado });
});

router.get("/Subtração/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.subtracao(num1, num2);
    res.json({ message: resultado });
});

router.get("/Divisão/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.divisao(num1, num2);
    res.json({ message: resultado });
});

router.get("/Multiplicação/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.multiplicacao(num1, num2);
    res.json({ message: resultado });
});

router.get("/Raiz/", (req, res) => {
    const { num1 } = req.query;
    const resultado = calculations.raiz(num1);
    res.json({ message: resultado });
});

router.get("/Potência/", (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = calculations.potencia(num1, num2);
    res.json({ message: resultado });
});

module.exports = router;