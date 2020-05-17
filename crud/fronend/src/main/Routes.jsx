import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

//aqui é onde é feito o mapeamento entre as URL e os componentes
export default props => 
    <Switch>
        {/*exact- significa exatamente, pois no user tem uma barra e ele poderia executar user */}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/*Redirect- caso nao seja nenhuma das coisas de cima ele vai pro home '/' */}
        <Redirect from='*' to='/' />
    </Switch>