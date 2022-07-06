import React, { Component } from 'react'
import './App.css';

class Etapa1 extends Component {
  render() {
    return(
  <div class = "etapa1">
  <h3> ETAPA 1 - DADOS GERAIS </h3>
   <p> 1. Qual é o seu nome? </p>
   <input/>
   <p> 2. Qual é a sua idade? </p>
   <input/>
   <p> 3. Qual seu email? </p>
   <input/>
   <form/>
   <p> 4. Qual a sua escolaridade? </p>
   <select>
   <option>Ensino Médio incompleto</option>
   <option>Ensino Médio completo</option>
   <option>Ensino Superior incompleto</option>
   <option>Ensino Superior completo</option>
   </select>
   <br></br>
   <br></br>
  <button onClick={this.props.goEtapa2}> Próxima Etapa </button>
 </div>
 )
 }
}

class Etapa2 extends Component {
  render() {
    return(
      <div class = "etapa1"> 
        <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
        <p> 5. Qual curso? </p>
        <input/>
        <p> 6. Qual unidade de ensino? </p>
        <input/>
        <br/>
        <br/>
        <button onClick={this.props.goEtapa3}> Próxima Etapa </button>
      </div>
    )
  }
}

class Etapa3 extends Component {
  render() {
    return(
      <div class = "etapa1"> 
        <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
        <p> 7. Por que não terminou um curso de graduação? </p>
        <input/>
        <p> 8. Você fez algum curso complementar? </p>
        <select>
        <option>Nenhum</option>
        <option>Curso técnico</option>
        <option>Curso de Inglês</option>
        </select>
        <br/>
        <br/>
        <button onClick={this.props.goEtapa4}> Próxima Etapa </button>
      </div>
    )
  }
}

class Etapa4 extends Component {
  render() {
    return(
      <div class = "etapa1"> 
        <h3> O FORMULÁRIO ACABOU </h3>
        <p> Muito obrigado por participar! Entraremos em contato! </p>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    tela: "etapa1"
  }
  
  goEtapa2 = () => {
    this.setState({
    tela: "etapa2"
    })
  }
  
  goEtapa3 = () => {
    this.setState({
    tela: "etapa3"
    })
  }

  goEtapa4 = () => {
    this.setState({
    tela: "etapa4"
    })
  }

  escolheTela = () => {
    switch (this.state.tela) {
      case "etapa1":
        return <Etapa1 goEtapa2={this.goEtapa2} />
        break;
    
      case "etapa2":
        return <Etapa2 goEtapa3={this.goEtapa3} />
        break;

      case "etapa3":
        return <Etapa3 goEtapa4={this.goEtapa4} />
        break;

      case "etapa4":
        return <Etapa4/>
        break;
    }
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
