import React from 'react'

export default function Home(props) {
  return (
    <div>
        <h1>Home</h1>
        <button onClick={props.changeListTrips}>Lista de Viagens</button>
        <button onClick={props.changeLogin}>Login</button>
    </div>
  )
}
