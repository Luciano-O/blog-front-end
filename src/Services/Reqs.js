const axios = require('axios');

export const loginFetch = async (email, password) => {
  try{
    const result = await axios.post('http://localhost:3030/login', {
        email,
        password,
    })
  
    return result.data;
  } catch(e) {
    return e.response.data
  }
}

export const loginRegister = async (displayName, email, password, image) => {
  try{
    const result = axios.post('http://localhost:3030/user', {
      displayName,
      email,
      password,
      image,
    })

    return result.data
  } catch(e) {
    return e.response.data
  }
}