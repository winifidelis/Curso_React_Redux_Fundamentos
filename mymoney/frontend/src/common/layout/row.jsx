
import React from 'react'

export default props => (
    /* no caso tudo que eu colocar dentro das cgves vira filho de ROW*/
    
    /*<ROW>
    /*    tudo que estiver aqui é filho de ROW*/
    /*    e ficará dentro da div <div className='row'>*/
    /*    <div className='row'>---FILHO---</div>*/
    /*</ROW>*/
    <div className='row'>{props.children}</div>
)