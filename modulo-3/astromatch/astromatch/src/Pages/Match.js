import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from "styled-components";

const Background = styled.div`
  color: #ff5593;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
`

const Container = styled.div`
  color: white;
  background-color: #ff5593;
  border: 2px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: center;
  width: 360px;
  height: 640px;
  margin: auto; 
`
const Text = styled.p`
  margin-left:-90px ;
`

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  &:hover{
  background-color: #ff2888;
  color: white;
}`

const PhotoContainer = styled.div`
  width: 50%;
`

const Photo = styled.img`
  height: auto;
  display: block;
  margin-left: 10px;
  width: 60px;
  height: 60px;
  border-radius: 150px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const ButtonDislike = styled.button`
  margin: 15px;
  margin-top: 10%;
  background-color: #ff2888;
  height: 50px;
  width: 150px;
  border: 1px solid red;
  border-radius: 150px;
  color: white;
&:hover{
  background-color: #ff408d;
  color: white;
}`

export const Match = (props) => {
  const [matches, setMatches] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const pickMatches = () => {
      axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/matches`)
        .then((response) => {
          setMatches(response.data.matches)
        })
        .catch((error) => {
          console.log(error)
        });
    };
    pickMatches();
  }, [refresh])

  const eraseMatches = () => {
    axios
      .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/clear`)
      .then((response) => {
        setRefresh(!refresh)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Background>
      <h1>Seus Matches</h1>
      <Container>
        {matches.map(i => {
          return (
            <MapContainer>
              <PhotoContainer>
                <Photo src={i.photo} />
              </PhotoContainer>
              <Text>{i.name}</Text>
            </MapContainer>
          )
        })}
        <ButtonContainer>
        <ButtonDislike onClick={props.changeHome}>Procurar mais pessoas</ButtonDislike>
        <ButtonDislike onClick={eraseMatches}>Apagar todos os matches</ButtonDislike>
        </ButtonContainer>
      </Container>
    </Background>
  )
}
