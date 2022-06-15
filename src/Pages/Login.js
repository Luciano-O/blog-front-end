import React, { useState, useEffect } from 'react';
import { loginFetch } from '../Services/Reqs';

function Login()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

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
    console.log(result);
  }

  return (
    <form>
      <input 
        value={ email }
        placeholder="email"
        onChange={({target}) => setEmail(target.value)}
      />
      <input 
        value={ password }
        placeholder="password"
        onChange={({target}) => setPassword(target.value)}
      />
      <button
        disabled={ disabled }
        onClick={ handleClick }
        type="button"
      >
        Login
      </button>
    </form>
  )

}

export default Login