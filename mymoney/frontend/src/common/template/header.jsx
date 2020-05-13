//Cabeçalho da aplicação
//esse arquivo foi carrgado pelo app.jsx

import React from 'react'

export default props => (
    //lembrando que os nomes inseridos em className vieram das classes css de AdminLTE
    <header className='main-header'>
        <a href='/#/' className='logo'>
            {/* Quando o menu laterial estiver escondido */}
            <span className='logo-mini'><b>M-</b><i className='fa fa-money'></i></span>
            {/* Quando o menu laterial estiver aberto */}
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> Meus</b> Dinheiros
            </span>        
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)