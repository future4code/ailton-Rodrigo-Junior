import React from 'react'

export default function Login(props) {
  return (
    <div>
        <h1>Login</h1>
        <button onClick={props.changeHome}>Voltar para Home</button>
    </div>
  )
}
