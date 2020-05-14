

import React from 'react'

export default props => (
    //...props.input -> conjunto de propriedade do imput
    //estou separando tudo aqui
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)