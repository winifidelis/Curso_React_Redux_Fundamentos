
//contem os cabeçalhos das abas
//é um componente funcional
import React from 'react'

export default props => (
    <ul className='nav nav-tabs'> 
        {props.children}
    </ul> 
)