import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

//Abaixo eu tenho definido um estado inicial
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    //antes de executar o componente ele obtem a lista de usuarios
    //para que a tela execute com tudo que é necessario
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    //Limpa o formulário
    //ele limpa o user do initialState
    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        //tenho que obter o estado
        //não é bom eu modificar diretamente os dados do estado
        //então eu faço um clone
        const user = this.state.user
        //quando eu tenho incluir o user não tem ID
        //quando eu irei alterar eu tenho um ID
        //lembrando que qualquer coisa diferente de 0 e true, então eu só verifico o ID
        const method = user.id ? 'put' : 'post'
        //mesma coisa na hora de definir a URL
        //eu verifico que tenho um ID ou não
        //ID: 0 - envio um endereço para inclur
        //ID: X - URL/ID do usuario para eu realizar as modificações
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        //.then - PROMISSE - executa o que está dentro de .then depois que eu tiver uma resposta
        //do servidor, isso garante que eu trabalhe apenas quando eu tiver uma resposta do servidor
        axios[method](url, user)
            .then(resp => {
                //abaixo obtenho a lista com o novo usuário incluido
                const list = this.getUpdatedList(resp.data)
                //modifico o state para imprimir na tela com a nova lista que recebi
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        //unshift - coloca um determinando user na primeira posição da lista
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        //clono um usuário
        //pois eu farei modificações no user
        //e não é bom fazer isso no estado
        const user = { ...this.state.user }
        //abaixo eu utilizo o nome do input para localizar
        //o que eu quero e obter o valor
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}