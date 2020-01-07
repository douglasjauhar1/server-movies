require('dotenv/config')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const route = require('./src/route/index')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.SERVER_PORT;

server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())
server.use(cors())

server.listen(PORT, ()=>{
    console.log('Server run at PORT', PORT);
    
})
server.use(morgan('dev'))
server.use('/', route)

module.exports = server