const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
//a linha abaixo é para tratar as atualizações, ajudara a receber os objetos atualizados
//e também executa as validações, por exemplo se tentar inserir um objeto com dados obrigatórios
BillingCycle.updateOptions({new: true, runValidators: true})
//metodo que intercepta a requisição antes ou depois de alguma ação
BillingCycle.after('post', errorHandler).after('put', errorHandler)

//Rota para obter o Count de dados no banco de dados
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle