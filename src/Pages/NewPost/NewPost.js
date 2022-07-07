import React, { useState, useContext, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import BlogContext from '../../Context/BlogContext';
import { createPost, getCategories } from '../../Utils/Reqs';

function NewPost () {
  const { token } = useContext(BlogContext);
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const bringCategories = async () => {
      const finalCategories = await getCategories();
      setCategories(finalCategories);
    }
    bringCategories();
  }, [])

  const handleSelectChange = ({target}) => {
    if(selectedCategories.includes(parseInt(target.value, 10))){
      const finalArr = selectedCategories.filter((item) => item !== parseInt(target.value, 10))
      setSelectedCategories(finalArr);
    } else {
      const finalArr = [...selectedCategories, parseInt(target.value, 10)]
      setSelectedCategories(finalArr);
    }
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={ title }
          onChange={({target}) => setTitle(target.value)}  
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control 
          as="textarea" 
          value={content}
          onChange={({target}) => setContent(target.value)}
          rows={3} 
        />
      </Form.Group>
      <div>
        {categories.map(({name, id}) => (
          <Form.Check
            inline
            key={id}
            onChange={handleSelectChange}
            label={name}
            value={id}
            name="group1"
          />
        ))}
      </div>
      <Button
        variant="outline-primary"
        onClick={() => {createPost(token, title, content, selectedCategories); history.push('/')}}
      >
      Create post
      </Button>
    </Form>
  )
}

export default NewPost;