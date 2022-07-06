import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component {
  state ={
    name: "",
    email: ""
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.name,
      email: this.state.email
    }
    axios.post(url, body,{
      headers:{
        Authorization: "rodrigo-povoa-ailton"
      }
    })
    .then((response) =>{
      alert("Usuário(a) cadastrado(a) com sucesso!")
      this.setState({name: "", email:""})
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.goToList}> Trocar de Tela </button><br></br>
        <input placeholder="Nome" value={this.state.name} onChange={this.onChangeName} />
        <input placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
        <button onClick={this.createUser} >Criar Usuário</button>
      </div>
    )
  }
}
