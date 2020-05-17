import React from 'react'

//abaixo eu estou utilizando um padrão do React
//eu não preciso colocar o return por já existe um 
//return implicito na Arrow Function
//ESSA É A MELHOR FORMA DE USAR
/*
export default props =>
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve</h2>
    </div>
    */

//Abaixo uma outra forma de envoltar os elementos
//caso eu não queria usar div
//QUANDO EU NÃO QUISER UMA DIV E JOGAR OS DADOS DIRETOS NA PÁGINA
/*
export default props =>
    <React.Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até breve</h2>
    </React.Fragment>
*/

//Outra forma de passar os elementos do componente
//e colocar tudo dentro de um Array
//ISSO AQUI NÃO É A MELHOR OPÇÃO
export default props => [
    //Eu adicionei essas chaves h1 2 h2 para que o navegador não reclame
    //pois o react quando eu envio dados assim ele solicita uma chave
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Até breve</h2>
    ]
