import React from 'react'
import Filho from './Filho'

export default props =>
<div>
<h1>{props.nome} {props.sobrenome}</h1>
<h2>Filhos</h2>
<ul>
    <Filho nome='Mario' sobrenome={props.sobrenome} />
    <Filho {...props} />{/*O filho assume as propriedades do pai*/}
    <Filho {...props} nome='Carla'/>
    <Filho nome='Joao' {...props} />{/*Se eu coloco assim o nome Joao vai ser sobre escrito*/}
</ul>
</div>