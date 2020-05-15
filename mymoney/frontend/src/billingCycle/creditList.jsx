

//ESSE ARQUIVO FOI FEITO PRIMEIRO
//ELE SERÁ TRANSFORMADO NO ITEMLIST.JSX
//ELE SERÁ UM ARQUIVO MAIS GENERICO

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../common/layout/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/input'

class CreditList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            //console.log('opa opa' + index)
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'credits', index)
        }
    }

    renderRow() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input}
                    placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name={`credits[${index}].value`} component={Input}
                    placeholder='Informe o valor' readOnly={this.props.readOnly} /></td>
                <td>
                    {/*O botao abaixo faz eu adicionar mais itens para incluir valores de credito*/}
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}>
                        <i className='fa fa-plus'></i>
                    </button>

                    {/*O botao abaixo faz eu criar um clone do objeto que eu selecionar, no caso clicar com o botao*/}
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>

                    {/*O botao abaixo faz excluir um item*/}
                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRow()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)