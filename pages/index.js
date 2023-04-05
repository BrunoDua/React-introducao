import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Pagina titulo="Página 1">
        <Container>
          <h1>Hello world</h1>
          <p>Parágrafo 1</p>
          <p>Parágrafo 2</p>
          <p>Parágrafo 3</p>
        </Container>
      </Pagina>
    </>
  )
}
