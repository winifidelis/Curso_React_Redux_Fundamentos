

import React, { Component } from 'react'

//componente criado baseado em classe
export default class Grid extends Component {

    //esse metodo recebe uma string separado por espaço
    //e ele transforma isso nas classes CSS do botstrap
    toCssClasses(numbers) {
        //separei o array de string pelos espaços
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}` 
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes 
    }

    render() {
        //se a propriedade cols não for passada ele envia 12 para a função
        const gridClasses = this.toCssClasses(this.props.cols || '12')
        return (
            <div className={gridClasses}> 
                {this.props.children}
            </div> 
        )
    }
}