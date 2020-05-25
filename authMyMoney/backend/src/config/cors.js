
//o CORS é uma proteção para solicitações feita por aplicações em outros endereços.
//Mesmo que a aplicação esteja no mesmo IP, e ela estando em porta diferente
//já configura um local diferente
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        //como isso aqui é um middleware é necessário o next para dar continuidade a atividade
    next()
}