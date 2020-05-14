const _ = require('lodash')

//Middleware é usado para tratar os erros
module.exports = (req, res, next) => {
	//objeto com detalhes de erros e dados
    //dentro do bundle está a lista de erros
    const bundle = res.locals.bundle

	//aqui dentro de bundle.erros estão os erros
    //caso exista erros ele tratará os erros
    if(bundle.errors) {
		//array com todas as string dos erros
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
		//não temos erros
        //como é um middleware ele irá para o próximo middleware
        next()
    }
}
//converte os erros em um array de mensagens
//
const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors 
}