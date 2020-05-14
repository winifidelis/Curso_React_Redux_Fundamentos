const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento 
    const BillingCycle = require('../api/billingCycle/billingCycleService')
	//Quando eu uso esse metodo register faz com que todas as rotas declaradas dentro de BillingCycle
    //funcione
    BillingCycle.register(router, '/billingCycles')
}