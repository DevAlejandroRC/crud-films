import { Card } from 'react-bootstrap'

const Movie = ({name, idioms, categories, date, image}) => {
  return (
    <Card style={{ width: '10rem' }}>
        <Card.Img variant='top' src={image} style={{ height: '150px' }}/>
        <Card.Header style={{ fontSize: '.8rem' }}>{name}</Card.Header>
        <Card.Body>
            <Card.Title style={{ fontSize: '.6rem' }}>Lenguaje: <strong>{idioms}</strong></Card.Title>
            <Card.Subtitle style={{ fontSize: '.5rem' }}>Categories: <strong>{categories}</strong></Card.Subtitle>
            <Card.Text style={{ fontSize: '.5rem' }}>Realease: {date}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Movie
