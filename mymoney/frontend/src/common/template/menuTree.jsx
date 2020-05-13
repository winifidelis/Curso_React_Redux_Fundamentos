//esse arquivo é carregado pelo menu.jsx
//para que eu não tenha aquele monte de html eu criei esse arquivo para ficar prático
//fiz um componente para criar o menu

import React from 'react'

export default props => (
    <li className='treeview'> 
        <a href={props.path}> 
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'> 
            {props.children}
        </ul>
    </li>
)