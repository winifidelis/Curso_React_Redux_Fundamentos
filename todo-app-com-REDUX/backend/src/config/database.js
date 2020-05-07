const mongoose = require('mongoose')
//abaixo tira uma mensagem de advertência
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')