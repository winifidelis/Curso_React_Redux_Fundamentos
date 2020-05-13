import React from 'react'

export default props => (
    //isso aqui só faz o render do cabeçalho
    //tudo extraido do template
    <section className='content-header'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)