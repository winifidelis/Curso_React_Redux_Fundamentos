import './Header.css'
import React from 'react'

export default props =>
    //d-none significa que se eu usar o projeto em um dispositivo celular
    //esse header não irá aparecer, eu vai sumir em dispositivos celulares
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>