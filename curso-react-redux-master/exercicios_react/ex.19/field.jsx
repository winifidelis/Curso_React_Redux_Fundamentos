import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

//mapear o meu statado global da aplicaçao para as propriedade do meu componente
//Isso aqui é um Decorator
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}
//ele que dispara as ações
function mapDispatchToProps(dispatch) {
    //primeiro parametro é as minhas actionscreator
    //segundo é o que dispara as ações
    return bindActionCreators({ changeValue }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Field)