import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import LoginScreen from './components/LoginScreen';
import UserListScreen from './components/UserListScreen';

const Container = styled.div`
padding: 1px;
`

export class App extends Component {

  state = {
    currentScreen: "loginScreen",
  }

  onScreen = () => {
    switch (this.state.currentScreen){
      case "loginScreen":
        return <LoginScreen goToList={this.goToList} />
      case "userListScreen":
        return <UserListScreen goToLogin={this.goToLogin} />
      default:
        return <div>Erro, página não encontrada</div>
    }
  }

  goToLogin = () => {
    this.setState({currentScreen: "loginScreen"})
  }

  goToList = () => {
    this.setState({currentScreen:"userListScreen"})
  }


  render() {
    return (
      <Container>
        {this.onScreen()}
      </Container>
    )
  }
}

export default App;
