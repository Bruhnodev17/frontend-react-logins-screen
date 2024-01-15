import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import { Container, Image, ContainerItems, H1, Button, User } from './styles'

function Users() {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3000/users")
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])    

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    navigate("/")
  }

  return (

    <>

      <Container>
        <Image alt="Logo Imagem" src={Avatar} />
        <ContainerItems>
          <H1>Usuários</H1>
          
          <ul>
            {users.map(user => (
              <User key={String(user.id)}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} alt="icone-lixeira" />
                </button>
              </User>
            ))}
          </ul>

          <Button onClick={goBackPage}>Voltar <img alt='Seta' src={Arrow} /></Button>

        </ContainerItems>
      </Container>

    </>
  )
}

export default Users
