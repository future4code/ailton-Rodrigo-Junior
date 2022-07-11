import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components";

const Background = styled.div `
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
  align-items: center;
  text-align: center;
  width: 360px;
  height: 640px;
  margin: auto; 
`

const PhotoContainer = styled.div`
  width: 50%;
`

const Photo = styled.img`
  /* margin-left: 25%; */
  height: auto;
  display: block;
  width: 180px;
  height: 180px;
`

const ButtonContainer = styled.div`
  margin-top: 10% ;
  display: flex;
  gap: 10px;
`

const ButtonLike = styled.button`
  margin: 7px;
  height: 50px;
  width: 150px;
  border: 1px solid #00aa6c;
  border-radius: 150px;
  color: #00aa6c;
&:hover{
  background-color: #00aa6c;
  color: white;
}`

const ButtonDislike = styled.button`
  margin: 7px;
  height: 50px;
  width: 150px;
  border: 1px solid red;
  border-radius: 150px;
  color: red;
&:hover{
  background-color: Red;
  color: white;
}`

const ButtonMatch = styled.button`
  margin-top: 30%;
  height: 40px;
  width: 120px;
  background-color: #ff408d;
  border: 1px solid white;
  color: white;
&:hover{
  background-color: #ff2888;
  color: white;
}`


export const Home = (props) => {
  const [name, setName] = useState("")
  const [age, setAge] = useState()
  const [bio, setBio] = useState("")
  const [photo, setPhoto] = useState("")
  const [photoAlt, setPhotoAlt] = useState("")
  const [id, setId] = useState("")
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const pickUser = () => {
      axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/person/`)
        .then((response) => {
          setName(response.data.profile.name)
          setAge(response.data.profile.age)
          setBio(response.data.profile.bio)
          setPhoto(response.data.profile.photo)
          setPhotoAlt(response.data.profile.photo_alt)
          setId(response.data.profile.id)
        })
        .catch((error) => {
          console.log(error)
        });
    };
    pickUser();
  }, [refresh])

  const matchLike = () => {
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/choose-person`, 
    {"id": `${id}`, "choice": true}, )
    .then((response) => {
      setRefresh(!refresh)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const matchDislike = () => {
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/choose-person`, 
    {"id": `${id}`, "choice": false}, )
    .then((response) => {
      setRefresh(!refresh)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <Background>
    <h1>AstroMatch</h1>
    <Container>
      <p><strong>Nome: </strong>{name}</p>   
      <PhotoContainer>
        <Photo src={photo} alt={photoAlt} />
      </PhotoContainer>
      <p><strong>Idade: </strong>{age}</p>
      <p><strong>Bio: </strong>{bio}</p>   
      <ButtonContainer>
      <ButtonLike onClick={matchLike}> Curti! </ButtonLike>
      <ButtonDislike onClick={matchDislike}>Passo!</ButtonDislike>
      </ButtonContainer>
      <ButtonMatch onClick={props.changeMatch}>Suas curtidas</ButtonMatch>
    </Container>
    </Background>
  )
}
