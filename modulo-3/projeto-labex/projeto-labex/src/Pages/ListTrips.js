import React from 'react'
import {useNavigate} from "react-router-dom"

export default function ListTrips(props) {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
  
  return (
    <div>
        <h1>ListTrips</h1>
        <button onClick={goToHome}>Voltar para Home</button>
    </div>
  )
}
