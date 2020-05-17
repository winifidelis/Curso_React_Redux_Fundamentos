import React from 'react'
import {SeparaFilho} from '../utils/util'


//A função abaixo pode ficar dentro de um arquivo Util.js
//e fiz isso só que eu mudei o nome da função
function childrenWithProps(props) {
    //a função map é para que eu possa passar
    //varios dados, assim o React.clone conseguira
    //trabalhar com vários filhos
    //o Map é quase um foreach para parametros
    return React.Children.map(props.children, childFilhoSeparado => {
        return React.cloneElement(childFilhoSeparado, {
            //abaixi eu obtenho os dados do pai
            //e depois coloco os dados do filhos'bastardo'
            ...props, ...childFilhoSeparado.props
        })
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                childrenWithProps(props)
            }
            <li>-----usando a função que está no util---------</li>
            {
                SeparaFilho(props)
            }
        </ul>
    </div>