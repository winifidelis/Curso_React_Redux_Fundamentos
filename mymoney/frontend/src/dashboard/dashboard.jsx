

import React, { Component } from 'react'
import { connect } from 'react-redux'
//o import abaixo é para fazer funcionar a ligação dos dashboardRedux e dahsboardActions
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'



class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


//o objeto abaixo é que vai dizer ao reactRedux como ele vai tirar o dado do store 
//e onde ele vai colocar o estado, o que irá adicionar o estado aos componentes
//isso foi definino no arquivo reducers
const mapStateToProps = state => ({ summary: state.dashboard.summary })
//abaixo eu pego todos os actionscreate ligo com o dispatch que diparará a ação
//sempre que eu achamar o metodo getsummary e executara todoso s reducers da apliação
//todos os componente relacionados ao estado serão renderizados
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
//abaixo estou exportanto o Dashboard com o prodrão decorator
//estou passando um objeto decorado
//export default connect(mapStateToProps)(Dashboard)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
//export default Dashboard