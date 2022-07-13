import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Home(props) {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate("/listTrips")
  }

  const goToLogin = () => {
    navigate("/login")
  }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={goToListTrips}>Lista de Viagens</button>
        <button onClick={goToLogin}>Login</button>
    </div>
  )
}
