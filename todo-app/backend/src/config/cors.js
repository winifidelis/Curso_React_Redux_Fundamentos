//requisição, resposta, e próximo
module.exports = function(req, res, next) {
    ///* permite acesso de qualquer origem
    //res é response, estou adicionando uma resposta ao cabeçalho
    //no lugar do * eu posso colocar o endereços das origens, por exemplo de meus clientes
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //na linha abaixo continua o fluxo indo para o próximo midlewere
    next()
}