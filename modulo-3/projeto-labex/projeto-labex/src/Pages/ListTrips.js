import React from 'react'

export default function ListTrips(props) {
  return (
    <div>
        <h1>ListTrips</h1>
        <button onClick={props.changeHome}>Voltar para Home</button>
    </div>
  )
}
