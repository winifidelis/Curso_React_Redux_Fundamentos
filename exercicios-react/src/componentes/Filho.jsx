import React from 'react'

export default props =>
    <div>
        <button
            onClick={() => props.notificarSaida('Praia')}>
            vou sair
        </button>
    </div>