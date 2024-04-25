const express = require('express')
const server = express()
const port  = process.env.port || 3000
const router = require('./routes/router')

server.set('view engine', 'ejs')

server.use('/', router)

server.listen(port, ()=> console.log(`Ruh-roh-RAGGY!!!....SCOOOOB!`))