import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
        value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
//a linha abaixo coloca as ações nos componentes colocados dentro da DIV
//ações que dispara o metodo das ações
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

//(bla bla bla)(bla bla)
//isso é uma chamada de função que retorna uma função
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
