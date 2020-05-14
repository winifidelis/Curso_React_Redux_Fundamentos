//esse arquivo é carregado pelo sideBar.jsx
//aqui dentro estão os menus inernos do sideBar.jsx

import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
                <MenuItem path='dashboard2'
                label='Dashboard 2' icon='usd' />
        </MenuTree>
    </ul>
)