import React from 'react'

export const BomDiaM = props => <h1>Bom dia, {props.nome}!</h1>

export const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>

export default BomDiaM

//Tb posso exportar os dois juntos

//export default { BoaNoite, BoaTarde}