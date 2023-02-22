import axios from 'axios'
import { useState } from 'react'
import { Button, Form, Modal, ModalHeader, ModalTitle } from 'react-bootstrap'
import { movieUrl } from '../utils'

const EditMovie = ({modal, close, movieInfo}) => {

  const [title, setTitle] = useState(movieInfo.title || '')
  const [language, setLanguage] = useState(movieInfo.original_language || '')
  const [genres, setGenres] = useState(movieInfo.genres || '')
  const [poster, setPoster] = useState(movieInfo.poster || '')
  const [release, setRelease] = useState(movieInfo.release_date || '')

  const loadData = () => {
    setTitle(movieInfo.title)
    setLanguage(movieInfo.original_language)
    setGenres(movieInfo.genres)
    setPoster(movieInfo.poster)
    setRelease(movieInfo.release_date)
  }

  const updateData = async() => {
    const url = movieUrl(movieInfo.id)
    await axios.put(url,{
      name: title, 
      language, 
      genres, 
      image: poster, 
      date: release
    })
    close()
  }
  
  return (
    <Modal show={modal} onHide={close} onEntered={loadData}>
      <ModalHeader closeButton>
        <ModalTitle>Edit film</ModalTitle>
      </ModalHeader>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title*</Form.Label>
            <Form.Control value={title} placeholder='Name of movie' onChange={(e) => setTitle(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Original lenguaje*</Form.Label>
            <Form.Control value={language} maxLength="2" placeholder='Language' onChange={(e) => setLanguage(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Categories</Form.Label>
            <Form.Control value={genres} placeholder='Genres' onChange={(e) => setGenres(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster*</Form.Label>
            <Form.Control value={poster} placeholder='Poster of movie'onChange={(e) => setPoster(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Release*</Form.Label>
            <Form.Control type='date' value={release} placeholder='Release movie' onChange={(e) => setRelease(e.target.value)}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
        <Button variant="primary" onClick={updateData}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditMovie
