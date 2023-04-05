import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Pagina from '../components/Pagina'
import { Container } from 'react-bootstrap'

const objetos = () => {
  return (
    <Pagina titulo="Objetos">
      <Container>
        <h1>Objeto</h1>
      </Container>
    </Pagina>
  )
}

export default objetos