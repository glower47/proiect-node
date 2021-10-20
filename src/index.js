const express = require('express')
const app = express()
const port = 3000
const myFunFact = require('./facts');

app.listen(port, () => {
    console.log("~~ a pornit serverul ~~")
})

app.get('/', (req, res) => {
    res.send("maimai")
})

app.get('/hello/:name?', (req, res) => {
    res.send("maimai  " + req.params.name)
})

app.get('/dailyfun', myFunFact);