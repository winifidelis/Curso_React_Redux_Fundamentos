import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//abaixo estou importando de uma forma diferente
//quando eu acho um par de chaves eu estou efetuando
//uma desestruturação, estou tirando de dentro desse modulo
//uma função, e o BomDiaM é a saída default da função
//import BomDiaM, { BoaTarde, BoaNoite } from './componentes/Multiplos'
//abaixo eu estou trazendo duas funções ao mesmo tempo
//import Multi from './componentes/Multiplos'

//aqui eu estou chamando um componente que trabalhar com classe
//import Saudacao from './componentes/Saudacao'

//Agora estou trabalhando com elementos pai e filho
import Pai from './componentes/Pai'
//import Filho from './componentes/Filho'
import Padrasto from './componentes/Padrasto'
import Bastardo from './componentes/Bastardo'

//const elemento = <h1>é nois</h1>

ReactDOM.render(
    //elemento

    //<Primeiro />

    //Abaixo estou passando dados por parametro
    //<BomDia nome='Winicius'/>

    //Aqui eu estou usando funções especificar
    //dentro do componente
    //<div>
    //    <BoaTarde nome='Ana' />{/* vindo direto do interior da função */}
    //    <BoaNoite nome='Bia' />{/* vindo direto do interior da função */}
    //    <BomDiaM nome='Luiza' />{/* vindo da funçãol default */}
    //</div>
    //abaixo estou usando um retorno default de várias funções
    //e expecifico elas quando eu quero usar
    //<div>
    //    <Multi.BoaNoite nome='Ana' />
    //    <Multi.BoaTarde nome='Bia' />
    //</div>

    //<Saudacao tipo='bom dia' nome='João' />
    <div>
        <Pai nome='Paulo' sobrenome='Silva' />

        {/* Abaixo eu irei passar filhos especificos para esse pai */}
        <hr />
        <Padrasto nome='Ludovic' sobrenome='Toreto'>
            <Bastardo nome='Brian'/>
            <Bastardo nome='Carl'/>
            <Bastardo nome='Jean' sobrenome='opa!'/>
        </Padrasto>

    </div>

    , document.getElementById('root')
)