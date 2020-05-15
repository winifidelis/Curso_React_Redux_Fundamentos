
//é chamado pelo billinhCycle,jsx
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

//a linha abaixo deixou de existir por eu ter transformando
//esse arquivo no itemList.jsx
//import CreditList from './creditList'

class BillingCycleForm extends Component {

    calculateSummary() {
        // t acumulador
        // v valor atual
        const sum = (t, v) => t + v
        return {
            // map transforma um determinado objeto ou elemento de uma array e alguma outra 
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
            //coloquei o + na frente pra converter uma string em numerico, isso é a forma mais simples
            //se não conseguir transforma retorna 0

            //como eu estou usando o MAP eu terei um array de vários numeros
            //e nisso ele vai somando tudo e acumulando no t
            //no caso eu retorno as soma de credito e a soma de debitos

        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        //console.log(handleSubmit)
        //abaixo eu estou usando os dados de calculateSummary
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} />

                    {/*<CreditList cols='12 6' list={credits} readOnly={readOnly} />*/}
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus='true' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

//destroyOnUnmount: false -> não quero que destrua os dados do
//forumulário quando o componente for destruido
//isso me ajuda a ter o dado quando eu for realizar alguma modificação
//dos dados no banco de dados
//export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

//isso aqui pega um valor que está dentro do formulário
//recebe como parametro o Id do formulario que no caso é  'billingCycleForm'
//irei pegar o dado que está controlado pelo redux form que está dentro do contexto/estado controlado pelo redux
//e colocar dentro deste componente
const selector = formValueSelector('billingCycleForm')

//recebe um estado e entrega um objeto
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

