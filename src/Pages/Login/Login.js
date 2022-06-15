import React, { useState, useEffect, useContext } from 'react';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import BlogContext from '../../Context/BlogContext';
import { Form, Button } from 'react-bootstrap'
import { loginFetch } from '../../Services/Reqs';

function Login()  {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [invalidUser, setInvalidUser] = useState(false);
  const { setToken } = useContext(BlogContext);

  useEffect(() => {
    const checkValidate = () => {
      const regex = /\S+@\S+\.\S+/;
      if(regex.test(email) && password.length > 5) {
        setDisabled(false)
      } else setDisabled(true)
    }
    checkValidate();
  }, [password, email])

  const handleClick = async () => {
    const result = await loginFetch(email, password)
    if(result.message) return setInvalidUser(result.message);
    setToken(result.token)
    history.push('/')
  }

  return (
    <form className={ styles.LoginDiv }>
      {invalidUser && invalidUser}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label><br/>
        <Form.Control
          type="email"  
          value={ email }
          placeholder="Enter email"
          onChange={({target}) => setEmail(target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br/>
        <Form.Control 
          type="password" 
          value={ password }
          placeholder="Password"
          onChange={({target}) => setPassword(target.value)}
        />
      </Form.Group>
      <Button 
        variant="primary"
        disabled={ disabled }
        onClick={ handleClick }
        type="button"
      >
        Log in
      </Button>
    </form>
  )

}

export default Login