import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Movie from '../Movie'
import useGetFilms from '../../hooks/useGetFilms'

const CinemaBillboard = () => {

  const [info, setInfo] = useState([])
  
  useGetFilms(setInfo)

  return (
    <Container>
      <Row >
        {
          info.map( item => (
            <Col key={item.id}>
              <Movie name={item.title} idioms={item.original_lenguaje} 
              categories={item.genres} date={item.release_date} image={item.poster}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default CinemaBillboard
