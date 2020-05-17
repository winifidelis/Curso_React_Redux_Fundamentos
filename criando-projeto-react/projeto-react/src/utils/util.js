import React from 'react'

export function SeparaFilho(props) {
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