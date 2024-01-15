import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Peoples from "../../assets/peoples.svg"
import Arrow from "../../assets/arrow.svg"
import { Container, Image, ContainerItems, H1, InputLabel, Input, Button,  } from './styles'

function App() {

  const [users, setUsers] = useState([])
  const navigate =  useNavigate()
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
     const { data: newUser } = await axios.post("http://localhost:3000/users", {
       name: inputName.current.value,
       age: inputAge.current.value
     })
     setUsers([...users, newUser])

     navigate("/usuarios")

  }

  return (

    <>

      <Container>
        <Image alt="Logo Imagem" src={Peoples} />
        <ContainerItems>
          <H1>Bem Vindo (a)</H1>
          <InputLabel>Nome:</InputLabel>
          <Input ref={inputName} placeholder='Nome' />

          <InputLabel>Idade:</InputLabel>
          <Input ref={inputAge} placeholder='Idade' />

          <Button onClick={addNewUser}>Cadastrar <img alt='Seta' src={Arrow} /></Button>
       
        </ContainerItems>
      </Container>

    </>
  )
}

export default App
