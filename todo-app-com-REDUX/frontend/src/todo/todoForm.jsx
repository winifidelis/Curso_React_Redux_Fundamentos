import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, changeDescription, search, clear } from './todoActions'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        //extrai de um objeto um conjunto de atributos
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        //onChange={props.handleChange}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}></IconButton>

                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>

                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
//o metodo que dispara as ações para todos os reducers
const mapDispatchToPros = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)