import React, { useState, useEffect, useContext } from 'react';
import { getMyUser, loginRegister } from '../../Utils/Reqs';
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
    const result = await loginRegister(displayName, email, password, image);
    console.log(result);
    if(result.message) return setRegisterError(result.message);
    const user = await getMyUser(result.token);
    setUser(user);
    setIsLogged(true);
    setToken(result.token);
    history.push('/')
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
        type="button"
      >
        Register
      </button>
    </form>
  )
}

export default Register;