import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import styles from './styles.module.css';
import BlogContext from '../../Context/BlogContext';
import { getMyUser, loginFetch } from '../../Utils/Reqs';

function Login()  {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [invalidUser, setInvalidUser] = useState(false);
  const { setToken,
    setUser,
    setIsLogged,
  } = useContext(BlogContext);

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
    const user = await getMyUser(result.token);
    setUser(user);
    setIsLogged(true);
    setToken(result.token)
    return history.push('/')
  }

  return (
    <Form className={ styles.LoginDiv }>
      {invalidUser && invalidUser}
        <Form.Control
          type="email"
          className={styles.inputEmail}
          value={ email }
          placeholder="Enter email"
          onChange={({target}) => setEmail(target.value)}
        />
        <Form.Control 
          type="password"
          className={styles.inputLogin}
          value={ password }
          placeholder="Password"
          onChange={({target}) => setPassword(target.value)}
        />
      <Button 
        variant="primary"
        disabled={ disabled }
        onClick={ handleClick }
        type="button"
      >
        Log in
      </Button>
      <span>Don't have an account? <Link to="/register">Register</Link></span>
    </Form>
  )

}

export default Login