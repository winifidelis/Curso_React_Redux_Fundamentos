import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        //divide a string e um vetor
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        //se a coluna tau existir pega o valor e montar um retorno para montar a
        //configuração do tamanho das divs do bootstrap
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes 
    }

    render() {
        //e não receber nada ele devolve 12
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}