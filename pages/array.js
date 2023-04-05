import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

const array = () => {

  const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

  const pessoa= {
    nome:'Bruno',
    idade: 27,
    telefone: '(61) 98164-0414'
  }
  return (
      <>
        <Pagina titulo="Arrays">
         <Container>
          <h1>Lista Ordenada</h1>

          <ol>
            {carros.map(item => (
              <li>{item}</li>
              ))}
          </ol>

         </Container>
        </Pagina>
      </>
  )
}

export default array