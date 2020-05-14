

//ESSE DASHBOARD NÃO TEM APLICAÇÃO DE REDUX

import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        //super é requerido
        super(props)
        //inicia os valores 
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
            //quando o then for executado significa que foi executado a chamada remota
            //eu ja tenho a resposta que preciso para evoluir o estado 'state'
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 2.0' />
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