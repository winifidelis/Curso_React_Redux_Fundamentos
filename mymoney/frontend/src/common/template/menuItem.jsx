//esse arquivo é carregado pelo menu.jsx
//para que eu não tenha aquele monte de html eu criei esse arquivo para ficar prático
//fiz um componente para criar o menu

import React from 'react'
import { Link } from 'react-router'

export default props => (
    <li>
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </Link>
    </li>
)