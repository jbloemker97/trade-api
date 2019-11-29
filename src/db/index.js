const mongoose = require('mongoose')

function makeDb() {
    mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
        .then (() => { console.log('Mongodb connected') })
        .catch((err) => { console.error(err) })
}

module.exports = makeDb