const express = require('express')
const app = express()
const port = 3000
const myFunFact = require('./facts');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const MY_SECRET_KEY = 'SUPERSECRETDISCRET'

const findUser = (username, password) => {
    if(username === 'admin' && password === '123456789'){
        return username
    }else{
        return null
    }
}

app.listen(port, () => {
    console.log("~~ a pornit serverul ~~")
    
})

app.use(bodyParser.json())

const authorizationMiddleware = (req, res, next) => {
    console.log('este timpul sa: ', Date.now())
    req.country = "Romania"
    const authorization = req.headers.authorization
    if(authorization){
        try{
            const decoded =  jwt.verify(authorization, MY_SECRET_KEY)
            next()
        }catch(e){
            res.send({
                error: 'Invalid ba nebunule'
            })
        }
        
    }

    // if(isValid){
    //     next()
    // }else {
    //     res.send('ba nebunule, ce faci')
    // }
    console.log(authorization)

    next()
}

app.post('/login', (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    if(findUser(username, password)){
        const token = jwt.sign({}, MY_SECRET_KEY)
        res.send({
            token,
        })
    }else {
        res.status(401).send({
            token: null
        })
    }
})

app.get('/', (req, res) => {
    res.send("maimai")
})

app.get('/hello/:name?', authorizationMiddleware, (req, res) => {
    res.send("maimai  " + req.params.name)
})

app.get('/dailyfun', myFunFact);