const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
//a linha abaixo é para tratar as atualizações, ajudara a receber os objetos atualizados
//e também executa as validações, por exemplo se tentar inserir um objeto com dados obrigatórios
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle