import env from 'react-dotenv';

const axios = require('axios');

const { API_URL } = env

export const loginFetch = async (email, password) => {
  try{
    const result = await axios.post(`${API_URL}/login`, {
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
    const result = await axios.post(`${API_URL}/user`,
    {
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

export const getMyUser = async (token) => {
  try{
    const result = await axios({
      method: 'GET',
      headers: {Authorization: token},
      url: `${API_URL}/user/me`
    })

    return result.data
  } catch(e) {
    return e.response
  }
}

export const getCategories = async () => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${API_URL}/categories`
    })

    return result.data
  } catch(e) {
    return e.response
  }
}

export const getRandomPosts = async () => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${API_URL}/post/random`
    })

    return result.data
  } catch(e) {
    return e.response
  }
}

export const getCategoryPosts = async (id) => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${API_URL}/categories/${id}`
    })

    return result.data.blogPost
  } catch(e) {
    return e.response
  }
}

export const createPost = async (token, title, content, categoryIds) => {
  try{
    return await axios({
      method: 'POST',
      url: `${API_URL}/post`,
      headers: { Authorization: token },
      data: { title, content, categoryIds }
    })
  } catch(e) {
    return(e.response)
  }
}

export const getByQuery = async (query) => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${API_URL}/post/search?q=${query}`,
    })

    return result.data
  } catch(e) {
    return(e.response)
  }
}

export const getAllPosts = async () => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${API_URL}/post`
    })

    return result.data
  } catch(e) {
    return(e.response)
  }
}