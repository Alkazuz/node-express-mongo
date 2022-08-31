const express = require("express");
const app = express();

app.use(express.json());

function getBasico(req, res) {
    res.json({mensagem:"Segunda rota basica"});
};

const benVindo = function(){
    console.log("Server is running");
};

const benVindo2 = function(){
    console.log(" Bem vindo ao servidor ");
};


const pedraPapelTesoura = (req, res) => {
let jogo = ['PEDRA','PAPEL','TESOURA']
res.json({jogada:jogo[Math.floor(Math.random()*3)]})
}

// jogo de pedra-papel-tesoura
app.get('/ppt',pedraPapelTesoura)

app.get('/dado', )

//arrow function - Terceira forma de escrever função
const bemVindo2 = () => {
//corpo de função
console.log( "Bem vindo Brou !" )
};

app.listen(3333,bemVindo2);