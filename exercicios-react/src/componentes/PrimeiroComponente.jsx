import React from 'react'

let isLegal = false

export default (props) => 
    <div>
        <h3>{props.valor}</h3>
        <h3>{props.AbcD}</h3>
        <h3>{1 + 1}</h3>
        <h3>{true ? 'Sim' : 'Não'}</h3>
        <h3>{isLegal ? 'Sim' : 'Não'}</h3>
        <h1>{Math.random()}</h1>
    </div>


/*
export default () => 
    <div>
        <h1>Primeiro Componente! (Arrow)</h1>
    </div>
*/
/*
export default function(){
    return <h1>Primeiro Componente!</h1>
}
*/

/*
function primeiro(){
    return <h1>Primeiro Componente!</h1>
}
export default primeiro
*/