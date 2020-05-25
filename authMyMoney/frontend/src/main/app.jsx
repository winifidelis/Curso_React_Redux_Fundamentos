//import '../common/template/dependencies'
//comentei a linha acima pq agora essas dependencias estão sendo importada em authOrApp.jsx


import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'> 
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)