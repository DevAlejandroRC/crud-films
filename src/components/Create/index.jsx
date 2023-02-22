import axios from 'axios'
import { useState } from 'react'
import { Button, Container, Form   } from 'react-bootstrap'
import { filmsUrl } from '../utils'

const Create = () => {

  const [name, setName] = useState('')
  const [language, setLanguage] = useState('')
  const [genres, setGenres] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const postData = async(event) => {
    event.preventDefault()
    const url = filmsUrl()
    await axios.post(url,{
      name, 
      language, 
      genres, 
      image, 
      date
    })
    .catch(response => alert("Upss parece que hay campos vacios o ocurrio un error inesperado\n" + response.message))
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Title*</Form.Label>
          <Form.Control required name='name' placeholder='Name of movie'  onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Original language</Form.Label>
          <Form.Control name='language' maxLength="2" placeholder='Language' onChange={(e) => setLanguage(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categories</Form.Label>
          <Form.Control name='genres' placeholder='Genres' onChange={(e) => setGenres(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Poster*</Form.Label>
          <Form.Control required name='image' placeholder='Poster of movie' onChange={(e) => setImage(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Release*</Form.Label>
          <Form.Control required type='date' name='date' placeholder='Release movie' onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        <Button variant='success' type="submit" size="lg" style={{marginTop: '5px'}} onClick={postData}>Save</Button>
      </Form>
    </Container>
  )
}

export default Create
