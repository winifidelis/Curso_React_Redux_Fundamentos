//a linha abaixo é para colocar codigos 'JFX' dentro do javascript
import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import {CompA, CompB as B} from './componentes/DoisComponentes'
//import CompA, {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
//import ComponenteClasse from './componentes/ComponenteClasse'
//import Contador from './componentes/Contador'
import Hooks from './componentes/Hooks'


//const elemento = document.getElementById('root')
//ReactDOM.render(<h2>teste 2</h2>, elemento)

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hooks />
    </div>
    , elemento)

/*
ReactDOM.render(
<div>
    <Contador numeroInicial={10} />
</div>
, elemento)
*/

/*
ReactDOM.render(
    <div>
        <ComponenteClasse valor='sou um componente de classe' />
        <ComponenteClasse />
        <ComponenteClasse valor=''/>
    </div>
    , elemento)
*/

/*
ReactDOM.render(
    <div>
        <Pai />
    </div>
    , elemento)
*/

/*
ReactDOM.render(
    <div>
        <ComponenteComFuncao />
    </div>
    , elemento)
*/

/*
ReactDOM.render(
    <div>
        <FamiliaSilva />
        <Familia sobrenome = 'Arruda' numero={123}>
            <Membro nome = 'Rafael' />
            <Membro nome = 'Ana' />
        </Familia>
    </div>
    , elemento)
*/





//ReactDOM.render(<PrimeiroComponente valor = 'bom dia!' AbcD={Math.pow(2,8)} />, elemento)

/*
ReactDOM.render(
    <div>
        <CompA valor = "Eu sou A" />
        <B valor = "BBBBBBB" />
    </div>
    , elemento)
*/
/*
ReactDOM.render(
    <div>
        <MultiElementos />
    </div>
    , elemento)
*/

/*
ReactDOM.render(
    <div>
        <CompA valor = "Eu sou A" />
        <B valor = "BBBBBBB" />
    </div>
    , elemento)
*/

