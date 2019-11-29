const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const makeDb = require('./db/index');
const tradeController = require('./trades/trade-controller')

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))

makeDb();

// Routes
app.all('/trades', tradeController)

// Listen
app.listen(5000, () => { console.log('Server is listening on PORT: 5000'); })