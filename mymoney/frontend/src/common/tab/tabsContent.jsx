
//irá agrupar os conteudos das abas
//componente funcional
import React from 'react'

export default props => (
    <div className='tab-content'> 
        {props.children}
    </div> 
)