
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
        //console.log(this.props.list)
    }
    
        renderRows() {
            //recebo a lista, caso ela esteja vazia ou for undefined eu recebo uma lista vazia
            const list = this.props.list || []
            return list.map(bc => (
                <tr key={bc._id}>
                    <td>{bc.name}</td>
                    <td>{bc.month}</td>
                    <td>{bc.year}</td>
                    <td>
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>
                </tr>
            ))
        }
    
    render() {
        //abaixo ele mostra uma vez sem nada
        //mas como ele é um pormisse ele vai preencher novamente quando issa lista for preenchida
        //console.log(this.props.list)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            {/* A classe CSS table-actions está escrita em custom.css*/}
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//export default BillingCycleList

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)