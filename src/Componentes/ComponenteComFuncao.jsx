import React from 'react'

const aprovados = ['Joao', 'Pedro', 'Paulo', 'Maria']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }


    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}