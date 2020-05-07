//import React, { Component } from 'react'
import React from 'react'
//import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//const URL = 'http://localhost:3003/api/todos'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)


    //DEPOIS EU EU ADICIONEI O REDUX EU COMENTEI TUDO PRA BAIXO
    //E COMENTEI PRA CIMA TB O QUE EU DEIXEI DE USAR
    /*
    constructor(props) {
        super(props)

        //
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)

        //o bind faz que com o this seja o proprio componente
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        //http://localhost:3003/api/todos?sort=-createdAt&description__regex=/Es/
        const search = description ? `&description__regex=/${description}/` : ''

        //axios.get(`${URL}?sort=-createdAt`).then(resp => console.log(resp.data))
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        //se eu comentar a linha abaixo eu não conseguirei modificar o campo no navegador, pois quem
        //está controlando o campo não é a DOM mas sim o componente
        this.setState({ ...this.state, description: e.target.value })
        //o que ocorre aqui é que o estado do componente é atualizado e logo apos o clique no teclado o componente
        //é atualizado e renderizado, mostrando o novo estado, ou a digitação
    }

    handleAdd() {
        //console.log(this)
        //console.log(this.state.description)
        const description = this.state.description
        //abaixo estou enviando o dados que digitei para ser gravado
        //axios.post(URL, { description }).then(resp => console.log('Adicionado!'))
        //o .then é uma promess isso significa que assim que eu tiver uma resposta ele informa no log

        axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        //...todo pego todos os atributos do objeto e coloca no parametro, e modifico apenas o atributo done
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
    */

