//Esse componente que decique quem irá aparecer, Auth ou App

import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './app'
import Auth from '../auth/auth'

import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {

    //irei validar o token caso o usuario esteja setado
    componentWillMount() {
        if (this.props.auth.user) {

            //aqui eu efetuo a validação do token
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        //aqui eu escolho o que eu irei exibir
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            //usuário existe e token validado

            //configurando o axios para enviar para exibição
            axios.defaults.headers.common['authorization'] = user.token
            //tenho que passar os filhos do compoente aqui
            //pois é aqui que é renderizado o dashborad bla bla bla .....
            //alem de enviar o axios de autorização que estou recebendo de user
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            //usuário não existe
            return <Auth />
        } else {
            //user existe e token invalido
            //esperando para decidir o que fazer
            return false
        }
    }
}
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)