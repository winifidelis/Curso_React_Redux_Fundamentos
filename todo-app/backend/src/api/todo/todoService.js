const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//quando eu enviar uma atualização eu queroreceber os dados atualizados
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo