const axios = require('axios');

export const loginFetch = async (email, password) => {
  try{
    const result = await axios.post(`${'http://localhost:3000'}/login`, {
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
    const result = await axios.post(`${'http://localhost:3000'}/user`,
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
      url: `${'http://localhost:3000'}/user/me`
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
      url: `${'http://localhost:3000'}/categories`
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
      url: `${'http://localhost:3000'}/post/random`
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
      url: `${'http://localhost:3000'}/categories/${id}`
    })

    return result.data.blogPost
  } catch(e) {
    return e.response
  }
}

export const createPost = async (token, title, content, categoryIds) => {
  try{
    await axios({
      method: 'POST',
      url: `${'http://localhost:3000'}/post`,
      headers: { Authorization: token },
      data: { title, content, categoryIds }
    })
  } catch(e) {
    console.log(e.response)
  }
}

export const getByQuery = async (query) => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${'http://localhost:3000'}/post/search?q=${query}`,
    })

    return result.data
  } catch(e) {
    console.log(e.response)
  }
}

export const getAllPosts = async () => {
  try{
    const result = await axios({
      method: 'GET',
      url: `${'http://localhost:3000'}/post`
    })

    return result.data
  } catch(e) {
    console.log(e.response)
  }
}