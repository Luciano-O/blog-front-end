const axios = require('axios');

export const loginFetch = async (email, password) => {
  const result = await fetch('http://localhost:3001/login', {
    method: 'POST',
    body: { email, password }
  })

  return result;
}