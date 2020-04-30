import React from 'react'
import { cp, filhosComProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Família</h1>
        
        {filhosComProps(props)}

        {
        //a linha abaixo está comentaa
        //pois estou usando ela dentro do arquivo ./utils/utils.js
        /*
        React.Children.map(props.children, filho =>{
            return React.cloneElement(filho, { ...props})
        })
        */
        }

        {/*React.cloneElement(props.children, { ...props})*/}
        {/*React.cloneElement(props.children, props)*/}

        {/*React.cloneElement(props.children,
            { sobrenome: props.sobrenome})
        */}

        {/* props.children */}
    </div>