

const INITIAL_STATE = { step: 1, number: 0 }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INC':
            //pego o estado da forma que está
            //altero somente o numero
            return { ...state, number: state.number + state.step }
        case 'DEC':
            //pego o estado da forma que está
            //altero somente o numero
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED':
            //pego o estado da forma que está
            //altero somente o step
            return { ...state, step: +action.payload }
        default:
            return state
    }
}