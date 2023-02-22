import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Card, Container, Table } from 'react-bootstrap'
import useGetFilms from '../../hooks/useGetFilms';
import EditMovie from '../EditMovie';
import { movieUrl } from '../utils';

const List = () => {

  const [movie, setMovies] = useState([])
  const [movieInfo, setMovieInfo] = useState({})
  const [showModal, setShow] = useState(false)
  
  useGetFilms(setMovies)

  const handleShow = async(id) => {
    const url = movieUrl(id)
    const {data} = await axios.get(url)
    setMovieInfo(data)
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  const handleDelete = async(id) => {
    const url = movieUrl(id)
    await axios.delete(url)
    setMovies(movie.filter(item => item.id !== id))
  }
  
  
  return (
    <Container>
      <Card>
        <Card.Header>
          <div className="d-grid gap-2">
            <Link className="btn btn-success" to={'/add'}>
              Add film
            </Link>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Films</Card.Title>
          <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title movie</th>
                <th>Language</th>
                <th>Release date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                movie.map( (item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.original_language}</td>
                    <td>{item.release_date}</td>
                    <td>
                      <ButtonGroup>
                        <Button variant='warning' onClick={() => handleShow(item.id)}>Edit</Button>
                        <Button variant='danger' onClick={() => handleDelete(item.id)}>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <EditMovie modal={showModal} close={handleClose} movieInfo={movieInfo}/>

    </Container>
    
  )
}

export default List
