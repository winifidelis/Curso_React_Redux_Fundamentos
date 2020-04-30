import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        //this.state.numero++
        //console.log(this)
    }

    menosUm = () => {
        this.menosDez(1)
        //this.setState({ numero: this.state.numero - 1 })
        //this.state.numero++
        //console.log(this)
    }

    maisDez = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
        //this.state.numero++
        //console.log(this)
    }

    menosDez = (diferenca) => {
        this.setState({ numero: this.state.numero - diferenca })
        //this.state.numero++
        //console.log(this)
    }

    

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.maisDez(10)}>Inc 10</button>
                <button onClick={() => this.menosDez(10)}>Dec 10</button>
            </div>
        )
    }

    //Forçar o this apontar para a classe
    //SOLUÇÃO 01 - bind
    /*
    constructor(props){
        super(props)
        this.maisUm = this.maisUm.bind(this)
    }
    */

    //SOLUÇÃO 02 - função arrow no onlclick
    //<button onClick={() => this.maisUm}>Inc</button>

    //SOLUÇÃO 03 função arrow na função chamada
    /*
    maisUm = () => {
        //this.props.numero++
        console.log(this)
    }
    */
}