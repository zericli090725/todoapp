const express = require('express')
const server = express()
const port = 3100
const mongoose = require('mongoose')
const session = require('express-session')


const passport = require('passport')
const jwt = require('jsonwebtoken')
// const { Strategy } = require('passport-local')

const cookieParser = require('cookie-parser')

const User = require('./schemas/user.schema')
const Todo = require('./schemas/todo.schema')
require('./passport-config');
server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(cookieParser())
server.use(passport.initialize())


server.get('/', (req,res) => {
    res.json("Hello")
})

server.use('/user', require('./routes/user'))

mongoose.connect('mongodb://127.0.0.1:27017/temp')
.then(() => {
    console.log("Database connected!")
    server.listen(port, () => {
        console.log(`Server running on port `, port)
    })
})
.catch(() => {
    console.log("Failed to connect with the database! ")
})

