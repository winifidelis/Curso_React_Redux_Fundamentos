import React, { Component } from 'react'

export default class Saudacao extends Component {
    //Abaixo eu adicione uma variavel state
    //ela é que vai poder realizar modificações nos campos
    //pois as variáveis que vem de props não podem ser modificadas por aqui
    //logo não ão bem variaveis né. Mas no caso o React não permite
    //essa modificação
    state = {
        //tipo: "Fala",
        //nome: "Pedro"
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    //Fiz a utilização do construtor para não utilizar a função
    //Arrow e ver que problemas podem acontecer
    constructor(props){
        //eu sempre tenho que colocar esse super
        super(props)

        //acho que eu posso chamar a função setTipo diretamente
        this.setTipo = this.setTipo.bind(this)

        //não modificarei o nome para ter as duas formas aparecendo 
        //para que eu posso ver no futuro
    }


    //abaixo eu estou fazendo uma função que fica escutando eventos
    //que ocorrem no input, pois que eu não fizer isso
    //se eu tentar modificar os dados que estão dentro no input
    //nada vai acontecer
    setTipo(e) {
        //console.log(e.target.value)
        //this.props.tipo = e.target.value
        this.setState({tipo: e.target.value})

        //Abaixo eu só fiz uma brincadeira
        //a parti do momento que eu mudo o estado
        //essa função será executada, isso para ver que
        //quem passar a mandar no componente é o estado
        /*
        let i = 1
        setInterval(() => {
            this.setState({ tipo: ++i })
        }, 1000)
        */
    }
    setNome(e) {
        //console.log(e.target.value)
        //this.props.nome = e.target.value
        this.setState({ nome: e.target.value })
    }

    //funcao responsável por renderizar o componente
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo}
                    onChange={this.setTipo} />

                <input type="text" placeholder="Nome..."
                    value={nome}
                    onChange={e => this.setNome(e)} />
            </div>
        )
    }
}