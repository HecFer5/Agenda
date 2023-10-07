import React from 'react'
import { Button, Container } from '@mui/material'


const Turnos = () => {

  return (
    <>
      <Container sx={{ border: ".5rem", borderStyle: "solid", boxShadow: 5, pb: '5px' }}>
        <h1>Turnos</h1>
        <Button variant='contained' color='success'>Boton</Button>
      </Container>
    </>
  )
}

export default Turnos