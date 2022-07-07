import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import styles from './styles.module.css';
import { getMyUser, loginRegister } from '../../Utils/Reqs';
import BlogContext from '../../Context/BlogContext';

function Register () {
  const history = useHistory();
  const [displayName, setDisplayName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [disabled, setDisabled ] = useState(true);
  const [registerError, setRegisterError] = useState();
  const { setToken,
    setUser,
    setIsLogged,
  } = useContext(BlogContext);

  useEffect(() => {
    const checkDisabled = () => {
      if((displayName.length > 5) && (password.length > 5)) { setDisabled(false) }
      else { setDisabled(true) }
    }
    checkDisabled();
  }, [password, displayName])

  const handleClick = async () => {
    const result = await loginRegister(displayName, email, password, '');
    if(result.message) return setRegisterError(result.message);
    const user = await getMyUser(result.token);
    setUser(user);
    setIsLogged(true);
    setToken(result.token);
    return history.push('/')
  }

  return (
    <Form className={ styles.registerDiv }>
      {registerError && registerError}
      <Form.Control
        placeholder="Display name"
        className={styles.inputDisplayName}
        type="text"
        value={ displayName }
        onChange={({target}) => setDisplayName(target.value)}
      />
      <Form.Control
        placeholder="Enter email"
        type="email"
        className={styles.inputRegister}
        value={ email }
        onChange={({target}) => setEmail(target.value)}
      />
      <Form.Control
        placeholder="Password"
        type="password"
        value={ password }
        onChange={({target}) => setPassword(target.value)}
      />
      <Button
        variant="primary"
        disabled={ disabled }
        onClick={ handleClick }
        type="button"
      >
        Register
      </Button>
      <span>already have an account? <Link to="/login">Log in</Link></span>
    </Form>
  )
}

export default Register;