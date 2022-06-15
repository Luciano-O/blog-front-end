import React, { useState, useEffect, useContext } from 'react';
import { loginRegister } from '../../Services/Reqs';
import BlogContext from '../../Context/BlogContext';
import { useHistory } from 'react-router-dom';

function Register () {
  const history = useHistory();
  const [displayName, setDisplayName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [image, setImage ] = useState('');
  const [disabled, setDisabled ] = useState(true);
  const [registerError, setRegisterError] = useState();
  const { setToken } = useContext(BlogContext);

  useEffect(() => {
    const checkDisabled = () => {
      if((displayName.length > 5) && (password.length > 5)) { setDisabled(false) }
      else { setDisabled(true) }
    }
    checkDisabled();
  }, [password, displayName])

  const handleClick = async () => {
    const result = await loginRegister(displayName, email, password, image);
    if(result.message) setRegisterError(result.message);
    setToken(result.token);
  }

  return (
    <form>
      {registerError && registerError}
      <input
        type="text"
        value={ displayName }
        onChange={({target}) => setDisplayName(target.value)}
      />
      <input
        type="email"
        value={ email }
        onChange={({target}) => setEmail(target.value)}
      />
      <input
        type="password"
        value={ password }
        onChange={({target}) => setPassword(target.value)}
      />
      <input
        type="text"
        value={ image }
        onChange={({target}) => setImage(target.value)}
      />
      <button
        disabled={ disabled }
        onClick={ handleClick }
      >
        Register
      </button>
    </form>
  )
}

export default Register;