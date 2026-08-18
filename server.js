const express = require('express')

const cors = require('cors')

const app = express()

const corsOptions = {
    orogin: ['http:/localhost:5500', 'http://127.0.0.1:5500']
}

app.use(cors(corsOptions))


app.use(express.json())

app.post('/alunos', (req, res) => {

    const { nome, url_imagem } = req.body

    console.log(nome + " " + url_imagem)

   // res.json('nome ${req.body.nome} idade:$(req.body.url_imagem)')

   // res.send("Lendo dados do banco...")
})


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})


const carros = [
    { "nome": "urus", "marca": "lamborghini", "ano": 2017 },
    { "nome": "dolphin", "marca": "BYD", "ano": 2015 },
    { "nome": "corolla", "marca": "toyota", "ano": 1998 },
    { "nome": "ka", "marca": "ford", "ano": 1990 }
]




