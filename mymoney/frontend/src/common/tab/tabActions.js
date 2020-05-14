
//arquivo onde estarão os actionscreators
//funções que vão gerar as ações que irá disparar a ações dos reducers
export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//showTabs('tabList', 'tabCreate)'
//essa função recebe um conjunto de IDs
//é um operadors rest
export function showTabs(...tabIds) {
    //o objeto terá vários atributos que serão exibidos
    const tabsToShow = {}
    //
    //[e] cada um dos elementos do arrau ...tabIds
    //showTabs('tabList', 'tabCreate)'
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
    //retorno as tabs que deverão ser exibidas
    //terei os ids que devem ser exibidos
}