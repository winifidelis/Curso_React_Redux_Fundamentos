import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

//getList é usado em billingCycleList.jsx
export function getList() {
    //requisição
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

/*
export function create(values) {
    return dispatch => {
        //console.log(values)
        //quando o post termina o then é executado
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                
                //dispatch([
                //    resetForm('billingCycleForm'),
                //    getList(),
                //    selectTab('tabList','tabCreate')
                //])
                
                dispatch(init())
            })
            .catch(e => {
                //e.response.data -> objeto que vem do backend com as respostas de erro
                //eu sei que vem do backend um atributo 'errors'
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
        
        //return{
        //    type: 'TEMP'
        //}
        
    }
}
*/

export function create(values) {
    return submit(values, 'post')
}


export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

//veja que a função abaixo só é utilizando dentro deste módulo
//ele não é esportado
function submit(values, method) {
    return dispatch => {
        //quando eu estiver alterando ou excluindo eu espero por esse id
        const id = values._id ? values._id : ''
        //console.log(values)
        //quando o post termina o then é executado
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                //e.response.data -> objeto que vem do backend com as respostas de erro
                //eu sei que vem do backend um atributo 'errors'
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    //o redux-mult permite um retorno de array de metodos
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        //inicio novamente o formulário passando o billingCycle como parametro
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        //inicio novamente o formulário passando o billingCycle como parametro
        initialize('billingCycleForm', billingCycle)
    ]
}


//DEIXA O FORMULÁRIO NO ESTATO INICIAL
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}