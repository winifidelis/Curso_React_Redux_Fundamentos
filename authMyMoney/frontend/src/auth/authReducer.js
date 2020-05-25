//localStorage substitui o coockie
//localStorage: o browser tem esse objeto em seu scopo global

const userKey = '_mymoney_user'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //validando token
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        //usuário obtido
        //aqui eu já tenho o usuário
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}