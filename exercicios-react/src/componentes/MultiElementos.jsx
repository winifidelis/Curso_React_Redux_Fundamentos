import React from 'react'

//ELEMENTOS UM AO LADO DO OUTRO
export default props =>
    [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
    ]


//SOLUÇÃO 02
/*
export default props =>
    <React.Fragment>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
    </React.Fragment>
*/


//SOLUÇÃO 01 mais usada
//ELEMENTOS DENTRO DE UMA DIV
/*    
export default props =>
    <div>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
    </div>
    */