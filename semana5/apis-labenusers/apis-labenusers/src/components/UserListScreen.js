import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerUser = styled.div`
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`

export default class UserListScreen extends React.Component {
  state ={
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }
  getUsers = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers:{
      Authorization:"rodrigo-povoa-ailton"
      }
    })
    .then((response) =>{
      console.log(response)
      this.setState({users: response.data})
    })
    .catch((error) =>{
      console.log("Ocorreu um problema! Tente novamente", error.response.data.message)
    })
  }

  deleteUser = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "rodrigo-povoa-ailton"
      }
    })
    .then((response) => {
      alert("Usuário excluído com sucesso!")
      this.getUsers()
    })
    .catch((error) => {
      alert("Não foi possível deletar o usuário")
    })
  }

  render() {
    console.log(this.state.users)
    const userList = this.state.users.map((user) =>{
      return (
          <ContainerUser key={user.id}>
            {user.name}
            <button onClick={() => this.deleteUser(user.id)}>X</button>
          </ContainerUser>
      )
    })
    return (
      <div>
        <button onClick={this.props.goToLogin}> Trocar de Tela </button><br></br>
        <div>Lista de Usuários</div>
        {userList}
      </div>
    )
  }
}
